const fs = require('fs');
const packages = require('./packages');
const global = require('../package.json');

// Create Directories
const createDir = (dirPath) => {
  fs.mkdirSync(dirPath, {recursive: true}, (error) => {
    if (error) console.error(error)
  })
}

// Create Files
const createFile = (filePath, fileContent) => {
  fs.writeFile(filePath, fileContent, (error) => {
    if (error) console.error(error)
  })
}

const allPackageFileContent = {
  "name": global.name.substr(0, global.name.indexOf('/')) + '/all',
  "version": global.version,
  "level": 8,
  "license": "MIT",
  "description": "All",
  "publishConfig": {
    "access": "public"
  },
  "dependencies": {
  }
}

////////////////////////////
// All packages dist
const pathAll = './packages/newall';
const allPckMains = [];
const allPckDeps = {};
const allPckJs = [];

// Sort packages by ascending level
packages.sort(function(a, b){
  return a.level - b.level
})

// Then push in the allPckMains with ascending levels
// and add dependancies name and version
packages.forEach(function (pck) {
  if (pck.id !== 'all' && pck.id !== 'newall') {
    allPckMains.push("@import '../" + pck.id + "/main");
  } 

  const pckDep = {}
  pckDep.name = global.name.substr(0, global.name.indexOf('/')) + '/' + pck.id;
  pckDep.version = global.version

  allPckDeps[pckDep.name] = pckDep.version;

  if (fs.existsSync('./packages/' + pck.id + '/src/scripts/dist.js') && pck.id !== 'all' && pck.id !== 'newall') {
    allPckJs.push("import " + pck.id + " from '../../../" + pck.id + "/src/scripts/distGlobal'")
  }
});

allPackageFileContent.dependencies = allPckDeps;

// Create path and files for package all
createDir(pathAll);
createDir(pathAll + '/src/scripts/');
createFile(pathAll + '/src/scripts/' + 'dist.js', allPckJs.map(item => item).join(";") + ";")
createFile(pathAll + '/_dist.scss', allPckMains.map(item => item).join("';") + "';");
createFile(pathAll + '/package.json', JSON.stringify(allPackageFileContent));


////////////////////////////
// Each package dists

const importsArr = [
  '/generated/icons',
  '/src/styles/settings',
  '/src/styles/tools'
]
  

packages.forEach(function (pck) {
  let pckDistDepsContent = [];
  let pckDistMainContent = [];

  if (pck.id !== 'all' && pck.id !== 'newall') {
    pckDistDepsContent = Object.keys(pck.dependencies).map(value => "@import '~" + value + importsArr[0] + "'; @import '~" + value + importsArr[1] + "'; @import '~" + value + importsArr[2] + "'").join(";") + ";";

    var mainDatas = fs.readFileSync('./packages/' + pck.id + '/_main.scss', 'utf8');
    pckDistMainContent.push(mainDatas)

    pckDistContent = pckDistDepsContent.concat(pckDistMainContent)

    fs.writeFileSync('./packages/' + pck.id + '/_test.scss', pckDistContent);
  }
});