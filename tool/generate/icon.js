const fs = require('fs');
const path = require('path');
const root = require('../utilities/root');
const { createFile } = require('../utilities/file');

const getIconList = (dir, suff) => {
  const icons = [];
  const iconDir = root(`${dir}/${suff}`);
  fs.readdirSync(iconDir).forEach((file) => {
    const ls = fs.lstatSync(path.join(iconDir, file));
    if (ls.isFile() && path.extname(file) === '.svg') {
      const name = file.substring(0, file.length - 4);
      icons.push(name);
    }
  });

  return icons;
};

const generateIcon = async (dir) => {
  let sass = '$icons-settings-remix: (';
  for (const icon of getIconList(dir, 'remix')) sass += `${icon}, `;
  sass += ');\n';

  sass += '$icons-settings-dsfr: (';
  for (const icon of getIconList(dir, 'dsfr')) sass += `${icon}, `;
  sass += ');\n';

  const iconPath = root('.config/icon.scss');
  createFile(iconPath, sass);
};

module.exports = { generateIcon };
