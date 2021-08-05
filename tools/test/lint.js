const stylelint = require('stylelint');
const { ESLint } = require('eslint');
const { getPackages } = require('../utilities/config');
const root = require('../utilities/root');
const log = require('../utilities/log');

const lintStyles = async (pck) => {
  const result = await stylelint.lint({ files: root(`src/${pck.path}/**/*.scss`), formatter: 'unix' });

  if (result.errored) {
    log.error(`${pck.id} style ✖`);
    console.log('\n\r', result.output);
    process.kill(0);
  } else log.info(`${pck.id} style ✓`);
};

const lintScripts = async (pck) => {
  const eslint = new ESLint();
  let results;
  try {
    results = await eslint.lintFiles([root(`src/${pck.path}/**/*.js`)]);
  } catch (e) {
    // console.log(e);
    return;
  }

  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);

  if (resultText) {
    log.error(`${pck.id} style ✖`);
    console.log(resultText);
    process.kill(0);
  } else log.info(`${pck.id} script ✓`);
};

const lint = async (packages) => {
  if (!packages) packages = getPackages();

  for (const pck of packages) {
    await lintStyles(pck);
    await lintScripts(pck);
  }
};

module.exports = { lintStyles, lintScripts, lint };
