const root = require('../utilities/root');
const { getConfigJSON } = require('../utilities/config');
const { createFile } = require('../utilities/file');

const generateStyle = (pck, file) => {
  let content = `////
/// ${pck.id.toLowerCase().replace(/^\w/, c => c.toUpperCase())} ${file.toLowerCase().replace(/^\w/, c => c.toUpperCase())}
/// @group ${pck.id.toLowerCase()}
////

`;

  const children = pck.children.filter(child => child.style && child.style.files.indexOf(file) > -1);

  children.sort((a, b) => a.style.level - b.style.level);

  const ascendance = `${pck.path}/`;

  const depthLevel = (ascendance.match(/\//g) || []).length - 1;
  let pathToCore = '';
  for (let i = 0; i < depthLevel; i++) {
    pathToCore += '../';
  }
  content += `@import '${pathToCore}media-query-order';\n`;

  for (const child of children) {
    content += `@import '${child.path.replace(ascendance, '')}/${file}';\n`;
  }

  createFile(root(`${pck.path}/${file}.scss`), content);
};

const generateScript = (pck, file) => {
  let content;

  const children = pck.children.filter(child => child.script && child.script.files.indexOf(file) > -1);

  children.sort((a, b) => a.script.level - b.script.level);

  if (file === 'main' && children.some(pck => pck.id === 'core')) {
    const core = children.filter(pck => pck.id === 'core')[0];
    children.splice(children.indexOf(core), 1);
    content = `import api from './${core.path.replace(pck.path + '/', '')}/main.js';\n`;
  } else content = 'import api from \'./api.js\';\n';

  for (const child of children) {
    if (child.script && child.script.files.indexOf(file) > -1) content += `import './${child.path.replace(pck.path + '/', '')}/${file}.js';\n`;
  }

  content += 'export default api;\n';
  createFile(root(`${pck.path}/${file}.js`), content);
};

const crawl = (pck) => {
  if (pck.type !== 'folder') return;
  pck.children.forEach(child => crawl(child));
  if (pck.style) pck.style.files.forEach(file => generateStyle(pck, file));
  if (pck.script) pck.script.files.forEach(file => generateScript(pck, file));
};

const concatenate = () => {
  const config = getConfigJSON();
  crawl(config);
};

module.exports = { concatenate };
