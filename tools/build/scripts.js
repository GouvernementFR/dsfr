const buble = require('@rollup/plugin-buble');
const root = require('../utilities/root');
const rollup = require('rollup');
const { terser } = require('rollup-plugin-terser');
const sourcemaps = require('rollup-plugin-sourcemaps');
const virtual = require('@rollup/plugin-virtual');
const banner2 = require('rollup-plugin-banner2');
// const prettier = require('rollup-plugin-prettier');
const fs = require('fs');
const getBanner = require('../generate/banner').getBanner;

const process = async (data, dir, filename, minify, legacy, map) => {
  const input = {
    input: 'entry',
    plugins: [
      virtual({
        entry: data
      }),
      banner2(() => `/*! ${getBanner()} */\n\n`)
    ]
  };

  const entryFilename = `${filename}.${legacy ? 'no' : ''}module${minify ? '.min' : ''}.js`;

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
    await bundle.write(output);
    await bundle.close();
  } catch (e) {
    console.log(e);
  }

  const size = fs.statSync(dir + entryFilename).size;

  console.log('\x1b[38m', entryFilename, '\x1b[33m', `${size} bytes`, '\x1b[0m');
};

const buildScripts = async (packages, src, dest, filename, minify, legacy, map) => {
  const srcDir = root(src + '/');
  const destDir = root(dest + '/');

  let data = '';
  const noScripts = [];

  for (const pck of packages) {
    const file = `${srcDir}${pck}/main.js`;
    if (fs.existsSync(file)) data += `import '${file}';`;
    else noScripts.push(pck);
  }

  if (noScripts.length > 0) console.log('\x1b[36m', `no scripts in ${noScripts.join(', ')}`, '\x1b[0m');

  if (data === '') return;

  await process(data, destDir, filename, false, false, map);

  if (minify) {
    await process(data, destDir, filename, true, false, map);
  }

  if (legacy) {
    await process(data, destDir, filename, false, true, map);

    if (minify) {
      await process(data, destDir, filename, true, true, map);
    }
  }
};

module.exports = buildScripts;
