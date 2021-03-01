const global = require('../../package.json');
const root = require('../utilities/root');
const { createFile } = require('../utilities/file');
const fs = require('fs');

const generateCore = () => {
  const dir = root('packages/core/generated/');

  let scss = '';
  let js = '';
  let ejs = '(function (locals) {\r\n';

  for (const prop in global.config) {
    scss += `$${prop}: '${global.config[prop]}';\r\n`;
    js += `export const ${prop} = '${global.config[prop]}';\r\n`;
    ejs += `  locals.${prop} = '${global.config[prop]}';\r\n`;
  }

  ejs += '}(locals));\r\n';

  createFile(dir + 'styles/_config.scss', scss);

  createFile(dir + 'scripts/config.js', js);

  createFile(dir + 'templates/ejs/config.ejs', ejs);
};

module.exports = generateCore;
