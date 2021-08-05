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
  plugins.push(postcssBanner({ banner: getBanner(), important: true }));
  const result = await postcss(plugins)
    .process(css, options);

  const size = createFile(result.opts.to, result.css, true);
  const filename = result.opts.to.substring(result.opts.to.lastIndexOf('/') + 1);

  log.file(filename, `${size} bytes`);
  if (result.map) createFile(result.opts.to + '.map', result.map.toString(), true);
};

const input = (path, filename) => {
  const filePath = root(`src/${path}/${filename}`);
  return `@import '${filePath}';\r\n`
};

const output = (id, path, filename) => {
  const append = filename ? `.${filename}` : '';
  const filePath = root(`.dist/${path}/${id}${append}`);
  return filePath;
};

const buildStyles = async (id, path, options, minify, map) => {
  let data = '';
  if (options && options.length) {
    options = ['main', ...options];
    for (const option of options) {
      await buildStyle(input(path, option), output(id, path, option), minify, map);
      data += input(path, option);
    }
  } else {
    data += input(path, 'main');
  }
  await buildStyle(data, output(id, path), minify, map);
};

const buildStyle = async (data, dest, minify, map) => {
  let options = {
    data: data,
    importer: importer(),
    outFile: `${dest}.css`,
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
    log.error(e.formatted);
    try {
      process.kill(0);
    } catch (e) {
      return;
    }
  }

  options = { from: undefined, to: `${dest}.css` };

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

  options = { ...options, to: `${dest}.min.css` };

  await process(result.css.toString(), [mqpacker({ sort: true }), cssnano()], options);
};

module.exports = buildStyles;
