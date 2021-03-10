const { createFile } = require('../utilities/file');
const sass = require('node-sass');
const importer = require('node-sass-magic-importer');
const perfectionist = require('perfectionist');
const postcss = require('postcss');
const cssnano = require('cssnano');
const mqpacker = require('mqpacker');
const postcssBanner = require('postcss-banner');
const root = require('../utilities/root');
const getBanner = require('../generate/banner').getBanner;

const process = async (css, plugins, options) => {
  plugins.push(postcssBanner({ banner: getBanner() }));
  const result = await postcss(plugins)
    .process(css, options);

  const size = createFile(result.opts.to, result.css);
  const filename = result.opts.to.substring(result.opts.to.lastIndexOf('/') + 1);

  console.log('\x1b[38m', filename, '\x1b[33m', `${size} bytes`, '\x1b[0m');
  if (result.map) createFile(result.opts.to + '.map', result.map.toString());
};

const buildStyles = async (packages, src, dest, filename, minify, map) => {
  const srcDir = root(src + '/');
  const destDir = root(dest + '/');

  let data = '';
  for (const pck of packages) data += `@import "${srcDir}${pck}/main";\r\n`;

  let options = {
    data: data,
    importer: importer(),
    outFile: destDir + filename + '.css',
    outputStyle: 'expanded'
  };

  if (map) {
    options.sourceMap = true;
    options.sourceMapContents = true;
    options.omitSourceMapUrl = true;
  }

  let result;

  try {
    result = sass.renderSync(options);
  } catch (e) {
    const reformat = e.formatted.replace(/on line .*\.scss/, `${e.file.replace('public/', '')}:${e.line}:${e.column}`);
    console.log('\x1b[31m', reformat, '\x1b[0m');
    try {
      process.kill(0);
    } catch (e) {
      return;
    }
  }

  options = { from: undefined, to: destDir + filename + '.css' };

  if (map) {
    options.map = { prev: result.map.toString() };
  }

  await process(result.css.toString(), [mqpacker({ sort: true }), perfectionist()], options);

  if (!minify) return;

  options = { ...options, to: destDir + filename + '.min.css' };

  await process(result.css.toString(), [mqpacker({ sort: true }), cssnano()], options);
};

module.exports = buildStyles;
