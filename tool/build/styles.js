const { createFile } = require('../utilities/file');
const sass = require('sass');
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

const input = (path, file, standalone) => {
  const insert = standalone ? 'standalone/' : '';
  const filePath = root(`${path}/${insert}${file}`);
  return `@use '${filePath}';\r\n`;
};

const output = (pck, file, standalone) => {
  const append = file ? `.${file}` : '';
  const filePath = root(`${standalone ? pck.standalone.dist : pck.dist}/${pck.filename}${append}${standalone ? '.standalone' : ''}`);
  return filePath;
};

const buildStyles = async (pck, minify, map, standalone = false) => {
  let data = '';
  const style = standalone ? pck.standalone.style : pck.style;
  if (style.files.length > 1) {
    for (const file of style.files) {
      const src = input(pck.path, file);
      await buildStyle(src, output(pck, file), minify, map);
      data += src;
    }
  } else {
    data = input(pck.path, 'main', standalone);
  }

  await buildStyle(data, output(pck, null, standalone), minify, map);
};

const buildStyle = async (data, dest, minify, map) => {
  let options = {
    outFile: `${dest}.css`,
    style: 'expanded'
  };

  if (map) {
    options.sourceMap = true;
    options.sourceMapIncludeSources = true;
  }

  let result;

  try {
    // TODO : Mettre à jour les options. Ou alors utiliser compile directement sur le fichier ?
    result = sass.compileString(data, options);
  } catch (e) {
    log.error(e.message);
    try {
      process.kill(0);
    } catch (e) {
      return;
    }
  }

  options = { from: undefined, to: `${dest}.css` };

  if (map) {
    options.map = { prev: result.sourceMap.toString() };
  }

  log.info(result.css.toString());

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

module.exports = { buildStyles, buildStyle };
