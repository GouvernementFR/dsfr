const { createFile } = require('../utilities/file');
const sass = require('node-sass');
const importer = require('node-sass-magic-importer');
const perfectionist = require('perfectionist');
const postcss = require('postcss');
const cssnano = require('cssnano');
const mqpacker = require('mqpacker');
const postcssBanner = require('postcss-banner');
const root = require('../utilities/root');
const log = require('../utilities/log');
const getBanner = require('../generate/banner').getBanner;

const process = async (css, plugins, options) => {
  plugins.push(postcssBanner({ banner: getBanner() }));
  const result = await postcss(plugins)
    .process(css, options);

  const size = createFile(result.opts.to, result.css, true);
  const filename = result.opts.to.substring(result.opts.to.lastIndexOf('/') + 1);

  log.file(filename, `${size} bytes`);
  if (result.map) createFile(result.opts.to + '.map', result.map.toString(), true);
};

const buildStyles = async (packages, src, dest, filename, minify, map) => {
  const srcDir = root(src + '/');
  const destDir = root(dest + '/');

  let data = '';

  switch (true) {
    case Array.isArray(packages):
      for (const pck of packages) {
        data += `@import "${srcDir}${pck.path}/main";\r\n`;
      }
      break;

    case packages === 'main':
      data = `@import "${srcDir}main";\r\n`;
      break;
  }

  let options = {
    data: data,
    importer: importer(),
    outFile: destDir + filename + '/' + filename + '.css',
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
    // const reformat = e.formatted.replace(/on line .*\.scss/, `${e.file.replace('public/', '')}:${e.line}:${e.column}`);
    log.error(e.formatted);
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

  await process(result.css.toString(),
    [
      mqpacker({
        sort: true
      }),
      perfectionist({
        cascade: false,
        indentSize: 2,
        trimLeadingZero: false
      })
    ], options);

  if (!minify) return;

  options = { ...options, to: destDir + filename + '.min.css' };

  await process(result.css.toString(), [mqpacker({ sort: true }), cssnano()], options);
};

module.exports = buildStyles;
