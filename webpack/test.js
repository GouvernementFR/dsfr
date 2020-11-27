const fs = require('fs');
const packages = require('./packages');

const settingsStr = '../src/styles/settings/';
const toolsStr = '../src/styles/tools/';

const importsArr = [
  '../src/styles/settings/',
  '../src/styles/tools/'
]

// Write scss dist files for each package
packages.forEach(function (pck) {
  fs.writeFileSync('./packages/' + pck.id + '/_test.scss', importsArr.map(el => Object.keys(pck.dependencies).map(item => "@import '" + el + item.split("/").pop()).join("';")).join("';") + "';");
});