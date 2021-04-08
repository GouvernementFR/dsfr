const global = require('../../package.json');
const root = require('../utilities/root');
const { createFile } = require('../utilities/file');
const fs = require('fs');
const log = require('../utilities/log');

const generateCore = () => {
  const dir = root('public/src/core/');

  let scss = '';
  let js = '';

  for (const prop in global.config) {
    scss += `$${prop}: '${global.config[prop]}';\r\n`;
    js += `export const ${prop} = '${global.config[prop]}';\r\n`;
  }

  const stylePath = dir + 'config.scss';
  createFile(stylePath, scss);
  log(38, stylePath);

  const scriptPath = dir + 'config.js';
  createFile(scriptPath, js);
  log(38, scriptPath);
};

module.exports = generateCore;
