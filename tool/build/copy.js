const { copyDir, copyFile } = require('../utilities/file');
const { createFile } = require('../utilities/file');
const root = require('../utilities/root');
// const { getPackages } = require('../utilities/config');

// const copyDirs = (src, dest, dirs, ext, removeOrphans) => {
//   for (const dir of dirs) copyDir(`${src}${dir}`, `${dest}${dir}`, ext, removeOrphans);
// };

const copyFiles = (src, dest, files, ext, force, removeOrphans) => {
  for (const file of files) {
    copyFile(`${src}${file}`, `${dest}${file}`, ext, force, removeOrphans);
  }
};

// const copyStyles = (pck, removeOrphans) => {
//   const src = root(`src/${pck.path}/`);
//   const dest = root(`public/src/${pck.path}/`);

//   copyDirs(src, dest, ['styles', 'generated/styles'], ['scss'], removeOrphans);
//   copyFiles(src, dest, ['index.scss', 'main.scss'], false, removeOrphans);
// };

// const copyScripts = (pck, removeOrphans) => {
//   const src = root(`src/${pck.path}/`);
//   const dest = root(`public/src/${pck.path}/`);

//   copyDirs(src, dest, ['scripts', 'generated/scripts'], ['js'], removeOrphans);
//   copyFiles(src, dest, ['index.js', 'main.js', 'api.js'], false, removeOrphans);
// };

// const copyTemplates = (pck, removeOrphans) => {
//   const src = root(`src/${pck.path}/`);
//   const dest = root(`public/src/${pck.path}/`);

//   copyDirs(src, dest, ['templates', 'generated/templates'], ['ejs', 'js'], removeOrphans);
//   copyFiles(src, dest, ['index.ejs'], false, removeOrphans);
// };

const copyImages = (removeOrphans) => {
  const src = root('tool/example/img');
  const dest = root('example/img');

  copyDir(src, dest, ['jpg', 'png', 'svg'], removeOrphans);
};

const copyAssets = (removeOrphans) => {
  const src = root('src/core/asset/');
  const dest = root('dist/');

  copyDir(src, dest, ['woff', 'woff2', 'ico', 'jpg', 'png', 'svg', 'webmanifest'], removeOrphans);
};

// const copyPackages = (removeOrphans) => {
//   const packages = getPackages();

//   for (const pck of packages) {
//     copyStyles(pck, removeOrphans);
//     copyScripts(pck, removeOrphans);
//     copyTemplates(pck, removeOrphans);
//   }
// };

const deployFavicons = () => {
  const src = root('asset/favicon');
  const dest = root('public/');

  copyDir(src, dest, ['ico', 'jpg', 'png', 'svg', 'webmanifest']);
};

const deployFiles = () => {
  copyDir(root('dist'), root('public/dist'));
  copyDir(root('example'), root('public/example'));
};

const deployRobots = () => {
  const content = 'User-agent: \nDisallow: /';
  createFile(root('public/robots.txt'), content);
};

module.exports = { copyFiles, copyImages, copyAssets, deployFavicons, deployFiles, deployRobots };
