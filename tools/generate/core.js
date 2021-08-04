const global = require('../../package.json');
const root = require('../utilities/root');
const { createFile } = require('../utilities/file');

const generateCore = () => {
  const dir = root('.config/');

  const keys = Object.keys(global.config);

  const scss = keys.map(key => `$${key}: '${global.config[key]}';\r\n`).join('');
  const stylePath = dir + 'config.scss';
  createFile(stylePath, scss);

  const lines = keys.map(key => `  ${key}: '${global.config[key]}'`);
  lines.push(`  version: '${global.version}'`);

  const js = `const config = {\r\n${lines.join(',\r\n')}\r\n};\r\n\r\nexport default config;\r\n`;
  const scriptPath = dir + 'config.js';
  createFile(scriptPath, js);
};

module.exports = generateCore;
