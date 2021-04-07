const fs = require('fs');
const yaml = require('js-yaml');
const root = require('../utilities/root');
const log = require('./log');
const path = require('path');

const getPackages = () => {
  const dir = root('src');
  const folders = fs.readdirSync(dir).filter((folder) => {
    const ls = fs.lstatSync(path.join(dir, folder));
    return ls.isDirectory();
  });

  return folders;
};

const getPackageYML = (id) => {
  try {
    const file = root(`src/${id}/.package.yml`);
    const fileContents = fs.readFileSync(file, 'utf8');
    const data = yaml.load(fileContents);
    return data;
  } catch (e) {
    log.error(e);
  }
};

const getPublicPackage = () => {
  try {
    const file = root('public/package.json');
    const fileContents = fs.readFileSync(file, 'utf8');
    return JSON.parse(fileContents);
  } catch (e) {
    log.error(e);
  }
};

const getAllPackagesYML = () => {
  const packages = getPackages().map((id) => getPackageYML(id));
  packages.sort((a, b) => {
    if (a.title < b.title) { return -1; }
    if (a.title > b.title) { return 1; }
    return 0;
  });

  return packages;
};

module.exports = { getPackages, getPackageYML, getPublicPackage, getAllPackagesYML };
