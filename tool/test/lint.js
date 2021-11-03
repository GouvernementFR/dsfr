const stylelint = require('stylelint');
const { ESLint } = require('eslint');
// const { getPackages } = require('../utilities/config');
const root = require('../utilities/root');
const log = require('../utilities/log');

const lintStyles = async (pck) => {
  let result;
  try {
    result = await stylelint.lint({ files: root(`${pck.path}/**/*.scss`), formatter: 'unix' });
  } catch (e) {
    return true;
  }

  if (result.errored) {
    log.error(`${pck.id} style ✖`);
    console.log('\n\r', result.output);
    return false;
  }

  log.info(`${pck.id} style ✓`);
  return true;
};

const lintScripts = async (pck) => {
  const eslint = new ESLint();
  let results;
  try {
    results = await eslint.lintFiles([root(`${pck.path}/**/*.js`)]);
  } catch (e) {
    // console.log(e);
    return true;
  }

  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);

  if (resultText) {
    log.error(`${pck.id} style ✖`);
    console.log(resultText);
    return false;
  }

  log.info(`${pck.id} script ✓`);
  return true;
};

const lint = async (packages) => {
  let success = true;
  let result;

  for (const pck of packages) {
    if (pck.type === 'folder') continue;
    result = await lintStyles(pck);
    success = success && result;
    await lintScripts(pck);
    success = success && result;
  }

  if (!success) process.kill(0);
};

module.exports = { lintStyles, lintScripts, lint };
