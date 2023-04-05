const buble = require('@rollup/plugin-buble');
const root = require('../utilities/root');
const rollup = require('rollup');
const { terser } = require('rollup-plugin-terser');
const sourcemaps = require('rollup-plugin-sourcemaps');
const virtual = require('@rollup/plugin-virtual');
const banner2 = require('rollup-plugin-banner2');
const path = require('path');
// const prettier = require('rollup-plugin-prettier');
const fs = require('fs');
const log = require('../utilities/log');
const getBanner = require('../generate/banner').getBanner;

const process = async (pck, data, dir, filename, minify, legacy, map, standalone) => {
  const input = {
    input: 'entry',
    plugins: [
      virtual({
        entry: data
      }),
      banner2(() => `/*! ${getBanner()} */\n\n`)
    ]
  };

  const entryFilename = `${filename}.${legacy ? 'no' : ''}module${minify ? '.min' : ''}${standalone ? '.standalone' : ''}.js`;

  const output = {
    format: legacy ? 'iife' : 'esm',
    minifyInternalExports: minify,
    dir: dir,
    entryFileNames: entryFilename
  };

  if (map) {
    input.plugins.push(sourcemaps());
    output.sourcemap = true;
  }

  if (legacy) {
    input.plugins.push(
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

  if (minify) input.plugins.push(terser());
  /*
  else {
    input.plugins.push(prettier());
  }
  */

  try {
    const bundle = await rollup.rollup(input);
    if (pck.inject) {
      const result = await bundle.generate(output);
      if (!pck.injection) pck.injection = {};
      pck.injection[entryFilename] = result.output[0].code;
    } else {
      await bundle.write(output);
      const size = fs.statSync(dir + entryFilename).size;
      log.file(entryFilename, `${size} bytes`);
    }
    await bundle.close();
  } catch (e) {
    log.error(e);
  }
};

const buildScript = async (pck, minify, legacy, map, standalone) => {
  const regExp = new RegExp('\\' + path.sep, 'g');
  const src = root(`${pck.path}${standalone ? '/standalone' : ''}`).replace(regExp, '/');
  const dir = root(`${standalone ? pck.standalone.dist : pck.dist}/`);
  let data = `import '${src}/main.js'\n`;

  if (pck.module) {
    await process(pck, data, dir, pck.filename, false, false, map, standalone);

    if (minify) {
      await process(pck, data, dir, pck.filename, true, false, map, standalone);
    }
  }

  if (legacy && pck.nomodule) {
    if (pck.script.files.indexOf('legacy') > -1) data += `import '${src}/legacy.js'\n`;

    await process(pck, data, dir, pck.filename, false, true, map, standalone);

    if (minify) {
      await process(pck, data, dir, pck.filename, true, true, map, standalone);
    }
  }
};

const buildSchemeBootScript = async () => {
  const regExp = new RegExp('\\' + path.sep, 'g');
  const src = root('src/scheme').replace(regExp, '/');
  const data = `import '${src}/boot.js'\n`;

  const input = {
    input: 'entry',
    plugins: [
      virtual({
        entry: data
      }),
      terser()
    ]
  };

  const output = {
    format: 'esm',
    minifyInternalExports: true
  };

  try {
    const bundle = await rollup.rollup(input);
    const result = await bundle.generate(output);
    await bundle.close();
    return result.output[0].code;
  } catch (e) {
    log.error(e);
  }
};

module.exports = { buildScript, buildSchemeBootScript };
