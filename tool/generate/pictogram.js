const fs = require('fs');
const path = require('path');
const root = require('../utilities/root');
const { createFile } = require('../utilities/file');
const log = require('../utilities/log');

const generatePictogram = async (dir) => {
  let sass = '$pictogram-config: (\n';
  const json = [];
  const absolute = root(dir);
  const categories = fs.readdirSync(absolute).filter((fd) => fs.lstatSync(`${absolute}/${fd}`).isDirectory());
  for (const category of categories) {
    const dir = `${absolute}/${category}`;
    const pictograms = fs.readdirSync(dir).filter(file => {
      const ls = fs.lstatSync(path.join(dir, file));
      return ls.isFile() && path.extname(file) === '.svg';
    });
    for (const pictogram of pictograms) {
      const name = pictogram.split('.').slice(0, -1).join('.');
      const p = `artwork/pictograms/${category}/${pictogram}`;

      sass += `  ${name}: ( category: '${category}', path: '${p}' ),\n`;
      json.push({ name: name, category: category, path: p });
    }
  }
  sass += ');\n';

  const sassPath = root('.config/pictogram.scss');
  const jsonPath = root('.config/pictogram.json');
  createFile(sassPath, sass);
  createFile(jsonPath, JSON.stringify(json));
};

const generateNewPictogram = async (dir) => {
  _parseFolder(dir);
};

const _parseFolder = (mainPath, subPath = '') => {
  const dir = `${mainPath}${subPath}`;
  log(38, `${dir}`);
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const stat = fs.statSync(`${dir}/${file}`);
    if (stat.isDirectory()) {
      _parseFolder(mainPath, `${subPath}/${file}`);
    } else {
      if (stat.isFile() && path.extname(file) === '.svg') {
        _replaceOldStructure(`${dir}/${file}`);
      }
    }
  });
};

const _replaceOldStructure = (path) => {
  log(38, `${path}`);
  const svg = fs.readFileSync(`${path}`, 'utf8');
  const newSvg = replaceOldStructureSVG(svg);
  fs.writeFileSync(`${path}`, newSvg);
};

const replaceOldStructureSVG = (svg) => {
  const classes = [...svg.matchAll(/<g class="([^"]*)"/g)];
  let newSvg = svg.replace(/<g/g, '<symbol').replace(/<\/g/g, '</symbol');
  for (const c of classes) {
    const id = c[1].split('fr-')[1];
    newSvg = newSvg.replace(` class="${c[1]}"`, '');
    newSvg = newSvg.replace(/<\/svg>/g, `  <use class="${c[1]}" href="#${id}"/>\n</svg>`);
  }
  return newSvg;
};

module.exports = { generatePictogram, generateNewPictogram, replaceOldStructureSVG };
