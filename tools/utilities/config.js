const fs = require('fs');
const yaml = require('js-yaml');
const root = require('../utilities/root');
const log = require('./log');
const path = require('path');
const dir = root('src');

const getIdPathObject = (id, type) => {
  return { id: id, path: type ? `${type}/${id}` : id };
};

const getPathsFromType = (type) => {
  const ids = fs.readdirSync(`${dir}/${type}`).filter((folder) => {
    const ls = fs.lstatSync(path.join(`${dir}/${type}`, folder));
    return ls.isDirectory();
  });
  return ids.map(id => getIdPathObject(id, type));
};

const getPackages = () => {
  const folders = [];
  folders.push(getIdPathObject('core'));
  folders.push(getIdPathObject('schemes'));
  folders.push(getIdPathObject('utilities'));

  folders.push(...getPathsFromType('component'));
  folders.push(...getPathsFromType('pattern'));
  folders.push(...getPathsFromType('page'));

  folders.push(getIdPathObject('legacy'));

  return folders;
};

const getPackageYML = (id) => {
  try {
    const file = root(`src/${id.path}/.package.yml`);
    const fileContents = fs.readFileSync(file, 'utf8');
    const data = yaml.load(fileContents);
    return data;
  } catch (e) {
    log.error(e);
  }
};

const getPublicPackage = () => {
  try {
    const file = root('.config/config.json');
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
