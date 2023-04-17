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
const path = require('path');
const log = require('../utilities/log');
const getBanner = require('../generate/banner').getBanner;

const process = async (pck, css, plugins, options) => {
  plugins.push(postcssBanner({ banner: getBanner(), important: true }));
  const result = await postcss(plugins)
    .process(css, options);
  const filename = path.parse(result.opts.to).base;

  if (pck.inject) {
    if (!pck.injection) pck.injection = {};
    pck.injection[filename] = result.css;
    return;
  }

  const size = createFile(result.opts.to, result.css, true);

  log.file(filename, `${size} bytes`);
  if (result.map) createFile(result.opts.to + '.map', result.map.toString(), true);
};

const input = (path, file, standalone) => {
  const insert = standalone ? 'standalone/' : '';
  const filePath = `${path}/${insert}${file}`;
  return `@import '${filePath}';\r\n`;
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
      await buildStyle(pck, src, output(pck, file), minify, map);
      data += src;
    }
  } else {
    data = input(pck.path, 'main', standalone);
  }

  await buildStyle(pck, data, output(pck, null, standalone), minify, map);
};

const buildStyle = async (pck, data, dest, minify, map) => {
  let options = {
    outFile: `${dest}.css`,
    style: 'expanded',
    loadPaths: [`${root('.')}`]
  };

  if (map) {
    options.sourceMap = true;
    options.sourceMapIncludeSources = true;
  }

  let result;

  try {
    // TODO : Mettre à jour les options. Ou alors utiliser compile directement sur le fichier ?
    result = await sass.compileStringAsync(data, options);
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
    options.map = { prev: result.sourceMap };
  }

  await process(pck, result.css.toString(),
    [
      mqpacker({ sort: false }),
      combineDuplicatedSelectors,
      discardDuplicates,
      stylelint({ fix: true })
    ], options);

  if (!minify) return;

  options = { ...options, to: `${dest}.min.css` };

  await process(pck, result.css.toString(), [
    mqpacker({ sort: false }),
    combineDuplicatedSelectors,
    discardDuplicates,
    cssnano()
  ], options);
};

module.exports = { buildStyles, buildStyle };
