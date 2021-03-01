const stylelint = require('stylelint');
const { ESLint } = require('eslint');
const root = require('../utilities/root');

const lintStyles = async (pck) => {
  const result = await stylelint.lint({ files: root(`packages/${pck}/**/*.scss`), formatter: 'string' });

  if (result.errored) {
    console.log('\n\r', result.output);
    process.kill(0);
  }
};

const lintScripts = async (pck) => {
  const eslint = new ESLint();
  let results;
  try {
    results = await eslint.lintFiles([root(`packages/${pck}/**/*.js`)]);
  } catch (e) {
    // console.log(e);
    return;
  }

  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);

  if (resultText) {
    console.log(resultText);
    process.kill(0);
  }
};

module.exports = { lintStyles, lintScripts };
