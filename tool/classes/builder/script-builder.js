const log = require('../../utilities/log');
const { createFile } = require('../../utilities/file');
const rollup = require('rollup');
const fs = require('fs');
const virtual = require('@rollup/plugin-virtual');
const banner2 = require('rollup-plugin-banner2');
const { getBanner } = require('../../generate/banner');
const sourcemaps = require('rollup-plugin-sourcemaps');
const buble = require('@rollup/plugin-buble');
const { terser } = require('rollup-plugin-terser');

class ScriptBuilder {
  constructor (config) {
    this.config = config;
  }

  async build (settings) {
    for (const item of this.config.items) {
      await this.compile(item, settings.minify, settings.sourcemap);
    }
  }

  async compile (item, minify, map) {
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
  }

  async process (item, inputOptions, outputOptions) {
    let result;

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
