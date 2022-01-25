const generateCore = require('./core');
const { generateIcon } = require('./icon');
const root = require('../utilities/root');
const { createFile } = require('../utilities/file');
const fs = require('fs');
const yaml = require('js-yaml');
const { flatten } = require('../utilities/config');

const analyse = (id, path, ascendants = []) => {
  const absolute = root(path);
  const config = {
    path: path,
    ascendants: ascendants
  };

  const replace = {
    style: [],
    script: []
  };

  let files, type, children;

  if (fs.existsSync(`${absolute}/.package.yml`)) {
    type = 'package';

    if (fs.existsSync(`${absolute}/main.scss`)) {
      files = ['main'];
      files.push(...['legacy'].filter(file => fs.existsSync(`${absolute}/${file}.scss`)));
      config.style = { level: -1, files: files };
    }

    if (fs.existsSync(`${absolute}/main.js`)) {
      files = ['main'];
      files.push(...['legacy'].filter(file => fs.existsSync(`${absolute}/${file}.js`)));
      config.script = { level: -1, files: files };
    }
  } else if (fs.existsSync(`${absolute}/.folder.yml`)) {
    type = 'folder';
    children = parse(path, [...ascendants, id]);

    if (children.some(child => child.style)) {
      files = ['main'];
      files.push(...['scheme', 'legacy'].filter(file => children.some(child => child.style && child.style.files.indexOf(file) > -1)));
      config.style = { level: -1, files: files };
      replace.style = [...children.map(child => child.replace.style).flat(), ...children.filter(child => child.style).map(child => child.id)].filter((id, index, array) => array.indexOf(id) === index);
    }

    if (children.some(child => child.script)) {
      files = ['main'];
      files.push(...['legacy'].filter(file => children.some(child => child.style && child.style.files.indexOf(file) > -1)));
      config.script = { level: -1, files: files };
      replace.script = [...children.map(child => child.replace.script).flat(), ...children.filter(child => child.script).map(child => child.id)].filter((id, index, array) => array.indexOf(id) === index);
    }
  } else return null;

  config.type = type;
  const fileContents = fs.readFileSync(`${absolute}/.${type}.yml`, 'utf8');
  const data = yaml.load(fileContents);
  config.id = data.id;
  config.title = data.title || '';
  if (data.order) config.order = data.order;
  config.description = data.description || '';
  config.draft = data.draft === true;
  config.doc = data.doc;
  if (data.wrapper) config.wrapper = data.wrapper;
  config.prepend = data.prepend === true;
  config.module = data.module !== false;
  config.nomodule = data.nomodule !== false;
  const example = data.example || {};
  if (!example.style) example.style = [];
  if (!example.script) example.script = [];
  config.example = example;
  const dependencies = {
    style: [],
    script: []
  };

  if (data.style) dependencies.style.push(...data.style);
  if (data.follow && data.follow.style) dependencies.style.push(...data.follow.style);
  if (children) dependencies.style.push(...children.map(child => child.dependencies.style).flat().filter((id, index, array) => array.indexOf(id) === index && replace.style.indexOf(id) === -1));
  if (data.script) dependencies.script.push(...data.script);
  if (data.follow && data.follow.script) dependencies.script.push(...data.follow.script);
  if (children) dependencies.script.push(...children.map(child => child.dependencies.script).flat().filter((id, index, array) => array.indexOf(id) === index && replace.script.indexOf(id) === -1));

  config.dependencies = dependencies;
  config.replace = replace;
  config.dist = data.dist ? data.dist : config.path.replace('src', 'dist');
  config.example.file = `${config.path.replace('src', 'example')}/index.html`;

  if (children) config.children = children;

  return config;
};

const parse = (path = '', ascendants = []) => {
  const absolute = root(path);
  const ids = fs.readdirSync(absolute).filter((fd) => fs.lstatSync(`${absolute}/${fd}`).isDirectory());
  const packages = ids.map(id => analyse(id, `${path}/${id}`, ascendants)).filter(pck => pck);
  return packages;
};

const getDeepDependencies = (id, packages, type) => {
  const pck = packages.filter(p => p.id === id)[0];
  const dps = pck.dependencies ? pck.dependencies[type] || [] : [];
  const deeps = dps.map(d => getDeepDependencies(d, packages, type)).flat();
  if (pck[type]) deeps.push(id);
  return deeps;
};

const use = (packages, type) => {
  for (const pck of packages) {
    if (!pck.usage) pck.usage = {};
    const dps = getDeepDependencies(pck.id, packages, type).filter((id, index, array) => array.indexOf(id) === index);
    dps.sort((a, b) => {
      const pa = packages.filter(p => p.id === a)[0];
      const pb = packages.filter(p => p.id === b)[0];
      return pa[type].level - pb[type].level;
    });
    pck.usage[type] = dps;
  }
};

const combine = (packages) => {
  for (const pck of packages) {
    const combination = [...pck.dependencies.style, ...pck.dependencies.script].filter((id, index, array) => array.indexOf(id) === index);
    combination.sort((a, b) => {
      const pa = packages.filter(p => p.id === a)[0];
      const pb = packages.filter(p => p.id === b)[0];
      const la = (pa.style ? pa.style.level : 0) + (pa.script ? pa.script.level : 0);
      const lb = (pb.style ? pb.style.level : 0) + (pb.script ? pb.script.level : 0);
      return la - lb;
    });
    pck.combination = combination;
  }
};

const sort = (elements) => {
  if (!elements) return;
  elements.sort((a, b) => a.title.localeCompare(b.title) - a.type.localeCompare(b.type) * 2 + ((a.order || 9999) - (b.order || 9999)) * 4);
  elements.forEach(child => sort(child.children));
};

const evaluate = (packages, type) => {
  while (packages.some(pck => (pck[type] && pck[type].level === -1))) {
    for (const pck of packages) {
      if (!pck[type]) continue;
      if (pck[type].level > -1) {
        continue;
      }
      if (pck.type === 'folder') {
        const levels = pck.children.map(child => child[type] ? child[type].level : -2);
        if (levels.indexOf(-1) > -1) continue;
        pck[type].level = Math.max(...levels) + 1;
        // console.log(pck.id, pck[type].level);
        continue;
      }
      if (pck.dependencies[type].length === 0) {
        pck[type].level = 0;
        // console.log(pck.id, 0);
        continue;
      }
      const dps = pck.dependencies[type].map(id => packages.filter(pck => pck.id === id)[0]);
      const levels = dps.map(p => {
        return p[type].level;
      });
      const ascendants = dps.map(p => p.ascendants).flat().filter((id, index, array) => array.indexOf(id) === index).filter(id => pck.ascendants.indexOf(id) === -1);
      levels.push(...ascendants.map(id => packages.filter(pck => pck.id === id)[0][type].level));
      if (levels.indexOf(-1) > -1) continue;
      pck[type].level = Math.max(...levels) + 1;
      // console.log(pck.id, pck[type].level);
    }
  }
};

const generateJSON = () => {
  const config = analyse('dsfr', 'src');
  const packages = flatten(config);
  evaluate(packages, 'style');
  evaluate(packages, 'script');
  sort(packages);
  use(packages, 'style');
  use(packages, 'script');
  combine(packages);

  const path = root('.config/config.json');
  createFile(path, JSON.stringify(config, null, 4));
};

const generateConfig = async () => {
  generateCore();
  await generateIcon('src/core/icon/deprecated', '-deprecated', 344);
  await generateIcon('src/core/icon', '', 216);
  generateJSON();
};

module.exports = generateConfig;
