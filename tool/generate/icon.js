const fs = require('fs');
const path = require('path');
const root = require('../utilities/root');
const { createFile } = require('../utilities/file');

const generateIcon = async (dir) => {
  let sass = '$icons-config: (\n';
  const json = [];
  const absolute = root(dir);
  const categories = fs.readdirSync(absolute).filter((fd) => fs.lstatSync(`${absolute}/${fd}`).isDirectory());
  for (const category of categories) {
    const dir = `${absolute}/${category}`;
    const icons = fs.readdirSync(dir).filter(file => {
      const ls = fs.lstatSync(path.join(dir, file));
      return ls.isFile() && path.extname(file) === '.svg';
    });
    for (const icon of icons) {
      let family, name;
      const filename = icon.split('.').slice(0, -1).join('.');
      if (filename.indexOf('--') > -1) {
        const s = filename.split('--');
        switch (s[0]) {
          case 'fr':
            family = 'dsfr';
            name = s.slice(1).join('--');
            break;
        }
      } else {
        family = 'remix';
        name = filename;
      }
      const p = `icons/${category}/${icon}`;

      sass += `  ${name}: ( family: '${family}', category: '${category}', path: '${p}' ),\n`;
      json.push({ name: name, family: family, category: category, path: p });
    }
  }
  sass += ');\n';

  const sassPath = root('.config/icon.scss');
  const jsonPath = root('.config/icon.json');
  createFile(sassPath, sass);
  createFile(jsonPath, JSON.stringify(json));
};

module.exports = { generateIcon };
