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
  "scripts": {
    "start": "webpack-dev-server --config ../../webpack/webpack.config.dev.js"
  },
  "dependencies": {
  }
}

////////////////////////////
// Generate an ‘all’ package
////////////////////////////
const pathAll = './packages/all';
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
  if (pck.id !== 'all') {
    allPckMains.push("@import '../" + pck.id + "/main");
  } 

  const pckDep = {}
  pckDep.name = global.name.substr(0, global.name.indexOf('/')) + '/' + pck.id;
  pckDep.version = global.version

  allPckDeps[pckDep.name] = pckDep.version;

  if (fs.existsSync('./packages/' + pck.id + '/src/scripts/dist.js') && pck.id !== 'all') {
    allPckJs.push("import '../../../" + pck.id + "/src/scripts/dist'")
  }
});

allPackageFileContent.dependencies = allPckDeps;

// Create path and files for package all
createDir(pathAll + '/src/scripts/');
createFile(pathAll + '/_dist.scss', allPckMains.map(item => item).join("';\r\n") + "';\r\n");
createFile(pathAll + '/src/scripts/' + 'dist.js', "import '@gouvfr/all/_dist.scss';\r\n" + allPckJs.map(item => item).join(";\r\n") + ";\r\n")
createFile(pathAll + '/package.json', JSON.stringify(allPackageFileContent));


////////////////////////////
// Generate dist for all packages
////////////////////////////
const importsArr = [
  '/src/styles/settings',
  '/src/styles/tools'
]
  
packages.forEach(function (pck) {
  let pckDistDepsContent = [];
  let pckDistMainContent = [];

  if (pck.id !== 'all') {
    pckDistDepsContent = Object.keys(pck.dependencies).map(function(value){
      if (value.includes('forms') || value.includes('radios') || value.includes('utilities')) {
        return "@import '~" + value + importsArr[1] + "';\r\n"
      } else {
        return "@import '~" + value + importsArr[0] + "';\r\n" + "@import '~" + value + importsArr[1] + "';\r\n"
      }
    }).join("\r\n");

    const mainDatas = fs.readFileSync('./packages/' + pck.id + '/_main.scss', 'utf8');
    pckDistMainContent.push(mainDatas.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g,''))

    pckDistContent = pckDistDepsContent.concat(pckDistMainContent)

    createFile('./packages/' + pck.id + '/_dist.scss', pckDistContent)
  }
});