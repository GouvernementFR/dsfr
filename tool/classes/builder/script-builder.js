const log = require('../../utilities/log');
const { createFile } = require('../../utilities/file');
const rollup = require('rollup');
const fs = require('fs');
const sourcemaps = require('rollup-plugin-sourcemaps');
const buble = require('@rollup/plugin-buble');
const { terser } = require('rollup-plugin-terser');

class ScriptBuilder {
  constructor (config) {
    this.config = config;
  }

  async build (settings) {
    log.info('script');
    for (const item of this.config.items) {
      await this.compile(item, settings.minify, settings.sourcemap);
    }
  }

  async compile (item, minify, map) {
    await this.process(item, false, map);

    if (minify) {
      await this.process(item, true, map);
    }
  }

  async process (item, minify, map) {
    let result;

    const inputOptions = {
      input: item.src,
      plugins: []
    };

    const outputOptions = {
      format: item.format ? 'iife' : 'esm',
      file: item.dest,
      minifyInternalExports: minify
    };

    if (map) {
      inputOptions.plugins.push(sourcemaps());
      outputOptions.sourcemap = true;
    }

    if (item.support === 'nomodule') {
      inputOptions.plugins.push(
        buble({
          target: {
            ie: '11'
          },
          transforms: {
            dangerousForOf: true
          }
        })
      );
    }

    if (minify) inputOptions.plugins.push(terser());

    try {
      const bundle = await rollup.rollup(inputOptions);
      result = await bundle.generate(outputOptions);
      await bundle.write(outputOptions);
      await bundle.close();
      const size = fs.statSync(outputOptions.file).size;
      log.file(outputOptions.file, `${size} bytes`);
    } catch (e) {
      log.error(e);
    }

    /*
    if (pck.inject) {
      if (!pck.injection) pck.injection = {};
      pck.injection[filename] = result.css;
      return;
    }
     */
  }
}

module.exports = { ScriptBuilder };
