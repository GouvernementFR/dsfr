const fs = require('fs');
const path = require('path');
const del = require('del');

// Create Directories
const createDir = (dirPath) => {
  fs.mkdirSync(dirPath, { recursive: true }, (error) => {
    if (error) console.error(error);
  });
};

const createFileParent = (filePath) => {
  const index = filePath.lastIndexOf('/', filePath);
  const parent = filePath.substring(0, index);
  if (!fs.existsSync(parent)) createDir(parent);
};

// Create Files
const createFile = (filePath, fileContent) => {
  createFileParent(filePath);
  fs.writeFileSync(filePath, fileContent);
  return fs.statSync(filePath).size;
};

const deleteDir = (dirPath, msg) => {
  console.log('\x1b[31m', msg || 'delete dir', dirPath, '\x1b[0m');
  del.sync(dirPath);
};

const deleteFile = (filePath, msg) => {
  console.log('\x1b[31m', msg || 'delete file', filePath, '\x1b[0m');
  del.sync(filePath);
};

const copyFile = (srcFile, destFile, force, removeOrphans) => {
  if (!fs.existsSync(srcFile)) {
    if (removeOrphans && fs.existsSync(destFile)) deleteFile(destFile, 'delete orphan');
    return;
  }
  createFileParent(destFile);
  if (!force && fs.existsSync(destFile)) {
    const lss = fs.lstatSync(srcFile);
    const lsd = fs.lstatSync(destFile);
    if (lss.size === lsd.size && lss.mtimeMs <= lsd.mtimeMs && lss.ctimeMs <= lsd.ctimeMs) return;
  }
  console.log('\x1b[90m', 'copy', srcFile, '\x1b[0m');
  fs.copyFileSync(srcFile, destFile);
};

const copyDir = (srcPath, destPath, ext, removeOrphans) => {
  if (!fs.existsSync(srcPath)) return;
  const chunks = fs.readdirSync(srcPath);
  for (const c of chunks) {
    const s = path.join(srcPath, c);
    const d = path.join(destPath, c);
    const ls = fs.lstatSync(s);
    if (ls.isDirectory()) {
      copyDir(s, d, ext, removeOrphans);
    } else {
      if (ext) {
        const index = d.lastIndexOf('.');
        const fileExt = d.substring(index + 1);
        if (ext.indexOf(fileExt) === -1) continue;
      }
      copyFile(s, d);
    }
  }

  if (removeOrphans) {
    const chunks = fs.readdirSync(destPath);

    for (const c of chunks) {
      const s = path.join(srcPath, c);
      if (!fs.existsSync(s)) {
        const d = path.join(destPath, c);
        const ls = fs.lstatSync(d);
        if (ls.isDirectory()) deleteDir(d, 'delete orphan');
        else deleteFile(d, 'delete orphan');
      }
    }
  }
};

module.exports = {
  createDir,
  createFile,
  deleteDir,
  copyDir,
  copyFile
};
