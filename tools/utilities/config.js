const fs = require('fs');
const yaml = require('js-yaml');
const root = require('../utilities/root');
const log = require('./log');
const path = require('path');
const dir = root('src');
const TYPES = require('../utilities/types');

const getIdPathObject = (id, type) => {
  return { id: id, path: type.isFolder ? `${type.id}/${id}` : id };
};

const getPathsFromType = (type) => {
  let ids;
  if (type.isFolder) {
    const p = `${dir}/${type.id}`;
    ids = fs.readdirSync(p).filter((pck) => {
      const ls = fs.lstatSync(path.join(p, pck));
      return ls.isDirectory();
    });
  } else ids = [type.id];
  return ids.map(id => getIdPathObject(id, type));
};

const getPackages = () => {
  const list = [];
  for (const type of TYPES.LIST) list.push(...getPathsFromType(type));
  return list;
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

const getConfigJSON = () => {
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

module.exports = { getPackages, getPackageYML, getConfigJSON, getAllPackagesYML };
