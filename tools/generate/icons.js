const fs = require('fs');
const path = require('path');
const IconFontBuildr = require('icon-font-buildr');
const root = require('../utilities/root');
const log = require('../utilities/log');
const { createFile } = require('../utilities/file');
const { optimize } = require('svgo');
const yaml = require('js-yaml');
const svg2font = require('svgicons2svgfont');
const svgoConfig = {
  plugins: [
    'cleanupAttrs',
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeEmptyText',
    'removeEmptyContainers',
    'removeViewBox',
    'cleanupEnableBackground',
    'convertStyleToAttrs',
    'convertColors',
    'convertPathData',
    'convertTransform',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'removeUnusedNS',
    'cleanupIDs',
    'cleanupNumericValues',
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    'removeRasterImages',
    'mergePaths',
    'convertShapeToPath',
    'sortAttrs',
    'removeDimensions',
    // { name: 'removeAttrs', params: { attrs: '(stroke|fill)' } },
  ]
};

const generateIcons = async (dest) => {
  const icons = [];

  const ymlPath = root('src/core/icons/icons.yml');
  const fileContents = fs.readFileSync(ymlPath, 'utf8');
  const yml = yaml.load(fileContents);

  const dir = root('src/core/icons/svg');
  fs.readdirSync(dir).forEach((file) => {
    const ls = fs.lstatSync(path.join(dir, file));
    if (ls.isFile() && path.extname(file) === '.svg') {
      const name = file.substring(0, file.length - 4);
      const icon = {
        icon: name,
        ligatures: yml[name] && yml[name].ligature ? [`${yml[name].ligature}`] : []
      };
      icons.push(icon);
    }
  });

  const config = {
    sources: [root('src/core/icons/svg/[icon].svg')],
    icons: icons,
    output: {
      codepoints: true,
      ligatures: true,
      fontName: 'dsfr-icons',
      fonts: 'icons',
      formats: [
        'woff'
      ]
    }
  };

  const builder = new IconFontBuildr(config);

  builder.pathsInit();

  for (const icon of icons) {
    const filepath = root(`src/core/icons/svg/${icon.icon}.svg`);
    const data = fs.readFileSync(filepath, 'utf8');
    const result = await optimize(data, svgoConfig);
    fs.writeFileSync(builder.getIconPath(icon.icon), result.data);
  }

  builder.paths.cache.fontSVGRaw = path.join(builder.paths.cache.root, `${builder.config.output.fontName}.raw.svg`);
  // await builder.buildFontSVG();
  await buildFontSVG(builder);

  const svg = fs.readFileSync(builder.paths.cache.fontSVGRaw, 'utf-8');
  const result = svg.replace(/(\d*\.\d\d\d)\d*/g, '$1');
  fs.writeFileSync(builder.paths.cache.fontSVG, svg);

  await builder.buildFontTTF();
  // await builder.buildFontEOT();
  await builder.buildFontWOFF();
  await builder.buildFontWOFF2();

  const filePath = builder.paths.cache.fontWOFF;
  const content = fs.readFileSync(filePath).toString('base64');

  let sass = `$icons-base64: '${content}';\n\n`;

  const codepoints = builder.getIconsCodepoints();
  const ligatures = builder.getIconsLigatures();

  sass += '$icons-settings: (\n';

  for (const icon of icons) {
    sass += `  ${icon.icon}: (\n`;
    sass += `    codepoint: '${codepoints[icon.icon][0]}'`;
    if (ligatures[icon.icon].length) sass += `,\n    ligature: '${ligatures[icon.icon][0]}'`;
    sass += '\n  ),\n';
  }
  sass += ');\n';

  const iconPath = root('.config/icons.scss');
  createFile(iconPath, sass);

  builder.pathsReset();
};

const buildFontSVG = async (builder) => {
  return new Promise((res, rej) => {
    const stream = new svg2font({
      // centerHorizontally: true,
      fontHeight: 1200,
      fontName: builder.config.output.fontName,
      // normalize: true,
      descent: 200,
      log: () => {}
    });

    stream.pipe(fs.createWriteStream(builder.paths.cache.fontSVGRaw))
      .on('finish', res)
      .on('error', rej);

    Object.values(builder.config.icons).forEach(({ icon, name, codepoints, ligatures }) => {
      const filePath = builder.getIconPath(icon);
      const glyph = fs.createReadStream(filePath);
      const unicode = [];

      if (builder.config.output.codepoints) unicode.push(...codepoints);
      if (builder.config.output.ligatures) unicode.push(...ligatures);

      glyph.metadata = { unicode, name };

      stream.write(glyph);
    });

    stream.end();
  });
};

module.exports = { generateIcons };
