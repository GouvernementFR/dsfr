const { copyDir, copyFile } = require('../utilities/file');
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
  const src = root('tools/examples/img');
  const dest = root('_example/img');

  copyDir(src, dest, ['jpg', 'png', 'svg'], removeOrphans);
};

const copyAssets = (removeOrphans) => {
  const src = root('src/core/assets/');
  const dest = root('_dist/');

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
  const src = root('assets/favicons');
  const dest = root('public/');

  copyDir(src, dest, ['ico', 'jpg', 'png', 'svg', 'webmanifest']);
};

const deployFiles = () => {
  copyDir(root('_dist'), root('public/_dist'));
  copyDir(root('_example'), root('public/example'));
};

module.exports = { copyFiles, copyImages, copyAssets, deployFavicons, deployFiles };
