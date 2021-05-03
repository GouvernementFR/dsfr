const root = require('../utilities/root');
const { getPublicPackage } = require('../utilities/config');
const { createFile } = require('../utilities/file');
const log = require('../utilities/log');

const generateMainStyle = () => {
  const config = getPublicPackage().config;

  let content = `/* ------------------------------------ *\\
  ${config.namespace.toUpperCase()}
\\* ------------------------------------ */

`;

  for (const pck of config.styles) {
    content += `@import './${pck}/main';\r\n`;
  }

  const path = root('public/src/main.scss');
  createFile(path, content);
};

const generateMainScript = () => {
  const config = getPublicPackage().config;

  let content = '';
  let api = 'api from ';
  for (const pck of config.scripts) {
    content += `import ${api}'./${pck}/main.js';\r\n`;
    api = '';
  }

  content += '\nexport default api;\n';

  const path = root('public/src/main.js');
  createFile(path, content);
};

module.exports = { generateMainStyle, generateMainScript };
