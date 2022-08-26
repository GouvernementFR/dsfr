const sass = require('sass');
const stylelint = require('stylelint');
const log = require('../../utilities/log');
const mqpacker = require('mqpacker');
const combineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
const discardDuplicates = require('postcss-discard-duplicates');
const postcss = require('postcss');
const { createFile } = require('../../utilities/file');
const cssnano = require('cssnano');

class StyleBuilder {
  constructor (config) {
    this.config = config;
  }

  async build (settings) {
    log.info('style');
    for (const item of this.config.items) {
      await this.compile(item, settings.minify, settings.sourcemap);
    }
  }

  async compile (item, minify, map) {
    let options = {
      outFile: item.dest,
      style: 'expanded'
    };

    if (map) {
      options.sourceMap = true;
      options.sourceMapIncludeSources = true;
    }

    let result;

    try {
      result = await sass.compileAsync(item.src, options);
    } catch (e) {
      log.error(e.message);
      try {
        process.kill(0);
      } catch (e) {
        return;
      }
    }

    options = { from: undefined, to: item.dest };

    if (map) {
      options.map = { prev: result.sourceMap };
    }

    await this.process(item, result.css.toString(),
      [
        mqpacker({ sort: false }),
        combineDuplicatedSelectors,
        discardDuplicates,
        stylelint({ fix: true })
      ], options);

    if (!minify) return;

    options = { ...options, to: item.dest.replace('.css', '.min.css') };

    await this.process(item, result.css.toString(), [
      mqpacker({ sort: false }),
      combineDuplicatedSelectors,
      discardDuplicates,
      cssnano()
    ], options);
  }

  async process (item, css, plugins, options) {
    const result = await postcss(plugins)
      .process(css, options);

    /*
    if (pck.inject) {
      if (!pck.injection) pck.injection = {};
      pck.injection[filename] = result.css;
      return;
    }
     */

    const size = createFile(item.dest, result.css, true);

    log.file(item.dest, `${size} bytes`);
    if (result.map) createFile(result.opts.to + '.map', result.map.toString(), true);
  }
}

module.exports = { StyleBuilder };
