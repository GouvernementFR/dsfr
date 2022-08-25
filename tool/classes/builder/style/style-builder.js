const root = require('../../../utilities/root');
const sass = require('sass');
const stylelint = require('stylelint');
const log = require('../../../utilities/log');
const mqpacker = require('mqpacker');
const combineDuplicatedSelectors = require('postcss-combine-duplicated-selectors');
const discardDuplicates = require('postcss-discard-duplicates');

class StyleBuilder {
  constructor (config) {
    this.config = config;
  }

  async build (settings) {
    for (const item of this.config.items) {
      await this.compile(item, settings.sourcemap);
    }
  }

  async compile (item, map) {
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
      // TODO : Mettre à jour les options. Ou alors utiliser compile directement sur le fichier ?
      result = await sass.compileAsync(item.src, options);
    } catch (e) {
      log.error(e.message);
      try {
        process.kill(0);
      } catch (e) {
        return;
      }
    }
    
    console.log(result);

    /*
    options = { from: undefined, to: item.dest };

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
      
     */
  }
}

module.exports = { StyleBuilder };
