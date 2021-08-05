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

const iterateTypes = (list, ext, filetype) => {
  const global = { main: [] };
  let packages, paths, options, exists;
  for (const type of TYPES.LIST) {
    exists = false;
    packages = list.filter(p => p.type === type.id);
    if (type.isFolder) {
      paths = getPaths(packages);
      exists = Object.entries(paths).some(([key, value]) => value.length > 0);
      if (exists) {
        generateFiles(type.id, paths, `src/${type.id}`, ext, filetype);
        options = Object.keys(paths);
      }
    } else {
      const pck = packages[0];
      if (pck) {
        exists = true;
        options = ['main'];
        if (pck.options) options.push(...pck.options);
      }
    }

    if (exists) {
      for (const option of options) {
        if (!global[option]) global[option] = [];
        global[option].push(type.id);
      }
    }
  }
  generateFiles('dsfr', global, 'src', ext, filetype);
};

const concatenate = () => {
  const config = getConfigJSON();

  iterateTypes(config.styles, 'scss', 'style');
  iterateTypes(config.scripts, 'js', 'script');
};

module.exports = { concatenate };
