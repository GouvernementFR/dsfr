const fs = require('fs');
const path = require('path');
const IconFontBuildr = require('icon-font-buildr');
const root = require('../utilities/root');
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
    'removeDimensions'
    // { name: 'removeAttrs', params: { attrs: '(stroke|fill)' } },
  ]
};

const generateIcon = async (dir, suff, descent) => {
  const icons = [];

  const ymlPath = root(`${dir}/icon.yml`);
  const fileContents = fs.readFileSync(ymlPath, 'utf8');
  const yml = yaml.load(fileContents);

  const iconDir = root(`${dir}/svg`);
  fs.readdirSync(iconDir).forEach((file) => {
    const ls = fs.lstatSync(path.join(iconDir, file));
    if (ls.isFile() && path.extname(file) === '.svg') {
      const name = file.substring(0, file.length - 4);
      const icon = {
        icon: name,
        ligatures: !!yml && yml[name] && yml[name].ligature ? [`${yml[name].ligature}`] : []
      };
      icons.push(icon);
    }
  });

  const config = {
    sources: [root(`${dir}/svg/[icon].svg`)],
    icons: icons,
    output: {
      codepoints: true,
      ligatures: true,
      fontName: `dsfr-icon${suff}`,
      fonts: '.config',
      formats: [
        'woff'
      ]
    }
  };

  const builder = new IconFontBuildr(config);

  builder.pathsInit();

  for (const icon of icons) {
    const filepath = root(`${dir}/svg/${icon.icon}.svg`);
    const data = fs.readFileSync(filepath, 'utf8');
    const result = await optimize(data, svgoConfig);
    fs.writeFileSync(builder.getIconPath(icon.icon), result.data);
  }

  builder.paths.cache.fontSVGRaw = path.join(builder.paths.cache.root, `${builder.config.output.fontName}.raw.svg`);
  // await builder.buildFontSVG();
  await buildFontSVG(builder, descent);

  const svg = fs.readFileSync(builder.paths.cache.fontSVGRaw, 'utf-8');
  // const result = svg.replace(/(\d*\.\d\d\d)\d*/g, '$1');
  fs.writeFileSync(builder.paths.cache.fontSVG, svg);

  await builder.buildFontTTF();
  // await builder.buildFontEOT();
  await builder.buildFontWOFF();
  await builder.buildFontWOFF2();

  const filePath = builder.paths.cache.fontWOFF;
  const content = fs.readFileSync(filePath).toString('base64');

  let sass = `$icons-base64${suff}: '${content}';\n\n`;

  const codepoints = builder.getIconsCodepoints();
  const ligatures = builder.getIconsLigatures();

  sass += `$icons-settings${suff}: (\n`;

  for (const icon of icons) {
    sass += `  ${icon.icon}: (\n`;
    sass += `    codepoint: '${codepoints[icon.icon][0]}'`;
    if (ligatures[icon.icon].length) sass += `,\n    ligature: '${ligatures[icon.icon][0]}'`;
    sass += '\n  ),\n';
  }
  sass += ');\n';

  const iconPath = root(`.config/icon${suff}.scss`);
  createFile(iconPath, sass);

  builder.pathsReset();
};

const buildFontSVG = async (builder, descent) => {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line new-cap
    const stream = new svg2font({
      fontHeight: 2048,
      fontName: builder.config.output.fontName,
      descent: descent
    });

    stream.pipe(fs.createWriteStream(builder.paths.cache.fontSVGRaw))
      .on('finish', resolve)
      .on('error', reject);

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

module.exports = { generateIcon };
