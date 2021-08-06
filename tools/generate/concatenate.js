const root = require('../utilities/root');
const { getConfigJSON } = require('../utilities/config');
const { createFile } = require('../utilities/file');
const TYPES = require('../utilities/types');

const generateStyle = (paths, dest, type, filename = '') => {
  const name = `${type.toUpperCase()} ${filename.toUpperCase()}`;
  let content = `/* ------------------------------------ *\\
  ${name}
\\* ------------------------------------ */

`;

  for (const path of paths) {
    content += `@import '${path}/${filename}';\n`;
  }

  createFile(dest, content);
};

const generateScript = (paths, dest, type, filename = '') => {

  let content = 'import api from \'./api.js\';\n';
  for (const path of paths) {
    content += `import './${path}/${filename}.js';\n`;
  }

  content += 'export default api;\n';
  createFile(dest, content);
};

const getPaths = (packages) => {
  const paths = { main: [] };
  for (const pck of packages) {
    const path = pck.id;
    paths.main.push(path);
    if (pck.options) {
      for (const option of pck.options) {
        if (!paths[option]) paths[option] = [];
        paths[option].push(path);
      }
    }
  }
  return paths;
};

const generateFiles = (id, paths, dest, ext, filetype) => {
  const generate = filetype === 'style' ? generateStyle : generateScript;

  for (const kind in paths) {
    generate(paths[kind], root(`${dest}/${kind}.${ext}`), id, kind);
  }
};

const iterateTypes = (concats, list, ext, filetype) => {
  const global = { main: [] };
  let packages, paths;
  for (const concat of concats) {
    packages = list.filter(p => p.type === concat.id);
    if (concat.isFolder) {
      paths = getPaths(packages);
      generateFiles(concat.id, paths, `src/${concat.path}`, ext, filetype);
    }

    global.main.push(concat.path);
    if (concat.options) {
      for (const option of concat.options) {
        if (!global[option]) global[option] = [];
        global[option].push(concat.path);
      }
    }
  }
  generateFiles('dsfr', global, 'src', ext, filetype);
};

const concatenate = () => {
  const config = getConfigJSON();

  iterateTypes(config.concat.styles, config.styles, 'scss', 'style');
  iterateTypes(config.concat.scripts, config.scripts, 'js', 'script');
};

module.exports = { concatenate };
