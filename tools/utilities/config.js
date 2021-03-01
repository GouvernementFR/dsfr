const fs = require('fs');
const yaml = require('js-yaml');
const root = require('../utilities/root');

const getPackageYML = (id) => {
  try {
    const file = root(`packages/${id}/.package.yml`);
    const fileContents = fs.readFileSync(file, 'utf8');
    const data = yaml.load(fileContents);
    return data;
  } catch (e) {
    console.log(e);
  }
};

const getPublicPackage = () => {
  try {
    const file = root('public/package.json');
    const fileContents = fs.readFileSync(file, 'utf8');
    return JSON.parse(fileContents);
  } catch (e) {
    console.log(e);
  }
}

module.exports = { getPackageYML, getPublicPackage };
