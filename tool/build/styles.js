const { createFile } = require('../utilities/file');
const sass = require('node-sass');
const importer = require('node-sass-magic-importer');
const stylelint = require('stylelint');
const discardDuplicates = require('postcss-discard-duplicates');
const combineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
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

const input = (path, file) => {
  const filePath = root(`${path}/${file}`);
  return `@import '${filePath}';\r\n`;
};

const output = (pck, file) => {
  const append = file ? `.${file}` : '';
  const filePath = root(`${pck.dist}/${pck.id}${append}`);
  return filePath;
};

const buildStyles = async (pck, minify, map) => {
  let data = '';
  if (pck.style.files.length > 1) {
    for (const file of pck.style.files) {
      const src = input(pck.path, file);
      await buildStyle(src, output(pck, file), minify, map);
      data += src;
    }
  } else {
    data = input(pck.path, 'main');
  }

  await buildStyle(data, output(pck), minify, map);
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
      mqpacker({ sort: false }),
      combineDuplicatedSelectors,
      discardDuplicates,
      stylelint({ fix: true })
    ], options);

  if (!minify) return;

  options = { ...options, to: `${dest}.min.css` };

  await process(result.css.toString(), [
    mqpacker({ sort: false }),
    combineDuplicatedSelectors,
    discardDuplicates,
    cssnano()
  ], options);
};

module.exports = buildStyles;
