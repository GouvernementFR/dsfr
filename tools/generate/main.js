const root = require('../utilities/root');
const { getPublicPackage } = require('../utilities/config');
const { createFile } = require('../utilities/file');
const log = require('../utilities/log');

// todo: generateMainStyles() => each generateMainStyle = (type)

const getMainByType = (type) => {
  const config = getPublicPackage();
  const root = [];
  const components = [];
  const patterns = [];
  const pages = [];

  for (const pck of config[type]) {
    const folder = pck.path.substring(0, pck.path.lastIndexOf('/'));
    switch (folder) {
      case 'component':
        components.push(pck);
        break;
      case 'pattern':
        patterns.push(pck);
        break;
      case 'page':
        pages.push(pck);
        break;
      default:
        if (pck.id === 'legacy') {
          root.push({ id: 'component' });
          root.push({ id: 'pattern' });
          root.push({ id: 'page' });
        }
        root.push(pck);
    }
  }

  return { components: components, patterns: patterns, pages: pages, root: root };
};

const generateMainStyles = () => {
  const folders = getMainByType('styles');
  console.log('folders', folders);
  generateMainStyle(folders.components, 'component');
  generateMainStyle(folders.patterns, 'pattern');
  generateMainStyle(folders.pages, 'page');
  generateMainStyle(folders.root);
};

const generateMainStyle = (packages, type) => {
  // const config = getPublicPackage();

  let content = `/* ------------------------------------ *\\
  MAIN SCSS ${(type) ? type.toUpperCase() : ''}
\\* ------------------------------------ */

`;

  for (const pck of packages) {
    content += `@import './${pck.id}/main';\r\n`;
  }

  const path = type ? root(`dist/${type}/main.scss`) : root('dist/main.scss');
  createFile(path, content);
};

const generateMainScripts = () => {
  const folders = getMainByType('scripts');
  generateMainScript(folders.components, 'component');
  generateMainScript(folders.patterns, 'pattern');
  generateMainScript(folders.pages, 'page');
  generateMainScript(folders.root);
};

const generateMainScript = (packages, type) => {
  // const config = getPublicPackage().config;

  let content = '';
  let api = 'api from ';
  for (const pck of packages) {
    content += `import ${api}'./${pck.id}/main.js';\r\n`;
    api = '';
  }

  if (packages.length > 0) content += '\nexport default api;\n';

  const path = type ? root(`dist/${type}/main.js`) : root('dist/main.js');
  createFile(path, content);
};

module.exports = { generateMainStyles, generateMainScripts };
