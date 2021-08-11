const fs = require('fs');
const yaml = require('js-yaml');
const root = require('../utilities/root');
const log = require('./log');

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

const flatten = (element) => {
  const flat = [element];
  if (!element.children) return flat;
  for (const child of element.children) flat.push(...flatten(child));
  return flat;
};

const getPackages = () => {
  const json = getConfigJSON();
  const flat = flatten(json);
  return flat;
};

module.exports = { flatten, getPackageYML, getConfigJSON, getPackages };
