const fs = require('fs');
const root = require('./root');
const path = require('path');

const getPackages = () => {
  const dir = root('packages');
  const folders = fs.readdirSync(dir).filter((folder) => {
    const ls = fs.lstatSync(path.join(dir, folder));
    return ls.isDirectory();
  });

  return folders;
};

module.exports = getPackages;
