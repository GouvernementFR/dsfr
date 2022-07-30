const fs = require('fs');
const path = require('path');
const root = require('../utilities/root');
const { createFile } = require('../utilities/file');

const generatePictogram = async (dir) => {
  let sass = '$pictogram-config: (\n';
  const json = [];
  const absolute = root(dir);
  const categories = fs.readdirSync(absolute).filter((fd) => fs.lstatSync(`${absolute}/${fd}`).isDirectory());
  for (const category of categories) {
    const dir = `${absolute}/${category}`;
    const pictograms = fs.readdirSync(dir).filter(file => {
      const ls = fs.lstatSync(path.join(dir, file));
      return ls.isFile() && path.extname(file) === '.svg';
    });
    for (const pictogram of pictograms) {
      const name = pictogram.split('.').slice(0, -1).join('.');
      const p = `artwork/pictograms/${category}/${pictogram}`;

      sass += `  ${name}: ( category: '${category}', path: '${p}' ),\n`;
      json.push({ name: name, category: category, path: p });
    }
  }
  sass += ');\n';

  const sassPath = root('.config/pictogram.scss');
  const jsonPath = root('.config/pictogram.json');
  createFile(sassPath, sass);
  createFile(jsonPath, JSON.stringify(json));
};

module.exports = { generatePictogram };
