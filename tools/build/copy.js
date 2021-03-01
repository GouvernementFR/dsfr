const { copyDir, copyFile } = require('../utilities/file');
const root = require('../utilities/root');

const copyDirs = (src, dest, dirs, ext, removeOrphans) => {
  for (const dir of dirs) copyDir(`${src}${dir}`, `${dest}${dir}`, ext, removeOrphans);
};

const copyFiles = (src, dest, files, ext, force, removeOrphans) => {
  for (const file of files) {
    copyFile(`${src}${file}`, `${dest}${file}`, ext, force, removeOrphans);
  }
};

const copyStyles = (pck, removeOrphans) => {
  const src = root(`packages/${pck}/`);
  const dest = root(`public/packages/${pck}/`);

  copyDirs(src, dest, ['src/styles', 'generated/styles'], ['scss'], removeOrphans);
  copyFiles(src, dest, ['index.scss', 'main.scss'], false, removeOrphans);
};

const copyScripts = (pck, removeOrphans) => {
  const src = root(`packages/${pck}/`);
  const dest = root(`public/packages/${pck}/`);

  copyDirs(src, dest, ['src/scripts', 'generated/scripts'], ['js'], removeOrphans);
  copyFiles(src, dest, ['index.js', 'main.js', 'api.js'], false, removeOrphans);
};

const copyTemplates = (pck, removeOrphans) => {
  const src = root(`packages/${pck}/`);
  const dest = root(`public/packages/${pck}/`);

  copyDirs(src, dest, ['src/templates', 'generated/templates'], ['ejs', 'js'], removeOrphans);
  copyFiles(src, dest, ['index.ejs'], false, removeOrphans);
};

const copyFonts = (removeOrphans) => {
  const src = root('fonts/');
  const dest = root('public/dist/fonts/');

  copyDir(src, dest, ['woff', 'woff2'], removeOrphans);
};

const copyAssets = (removeOrphans) => {
  const src = root('assets/');
  const dest = root('public/example/');

  copyDir(src, dest, ['jpg', 'png', 'svg'], removeOrphans);
};

module.exports = { copyStyles, copyScripts, copyTemplates, copyFonts, copyAssets };
