const generateCore = require('./core');
const { generateIcons } = require('./icons');
const root = require('../utilities/root');
const { createFile } = require('../utilities/file');
const { getPackages, getPackageYML } = require('../utilities/config');
const fs = require('fs');
const TYPES = require('../utilities/types');

const EXTENSIONS = {
  styles: 'scss',
  scripts: 'js'
};

const getDependencies = (list, type, follow) => {
  const dependencies = {};
  for (const pck of list) {
    const yml = getPackageYML(pck);
    const d = yml[type];
    const f = follow && yml.follow && yml.follow[type] ? yml.follow[type] : [];
    const dps = Array.isArray(d) ? d : typeof d === 'string' ? [d] : [];
    dps.push.apply(dps, Array.isArray(f) ? f : typeof f === 'string' ? [f] : []);
    dps.forEach((id) => { if (!list.some(p => p.id === id)) throw new Error(`Error in ${type} dependencies of package ${pck.id}: ${id} doesn't exist`); });
    dependencies[pck.id] = dps;
  }
  return dependencies;
};

const getSortedList = (type, options) => {
  const packages = getPackages();
  const levels = {};

  const list = [];
  const ext = EXTENSIONS[type];
  for (const pck of packages) {
    const type = pck.path.split('/')[0];
    if (TYPES.LIST.every(t => t.id !== type)) continue;
    pck.type = type;
    for (const option of options) {
      if (fs.existsSync(root(`src/${pck.path}/${option}.${ext}`))) {
        if (!pck.options) pck.options = [];
        pck.options.push(option);
      }
    }
    if (fs.existsSync(root(`src/${pck.path}/main.${ext}`))) list.push(pck);
    levels[pck.id] = -1;
  }

  const dependencies = getDependencies(list, type, true);

  let complete = false;

  while (!complete) {
    complete = true;

    for (const pck of list) {
      if (levels[pck.id] > -1) continue;
      if (dependencies[pck.id].length === 0) {
        levels[pck.id] = 0;
        continue;
      }
      const lvls = dependencies[pck.id].map((d) => { return levels[d]; });
      if (lvls.some((lvl) => { return lvl === -1; })) {
        complete = false;
        continue;
      }
      const level = Math.max(...lvls) + 1;
      levels[pck.id] = level;
    }
  }

  list.sort((a, b) => { return levels[a.id] - levels[b.id]; });

  return list;
};

const getUsage = (packages, list, type) => {
  const dependencies = getDependencies(packages, type, false);
  const usage = {};

  for (const pck of packages) {
    const dps = dependencies[pck.id];
    const flatten = [...dps];
    for (const p of dps) flatten.push(...dependencies[p]);
    flatten.push(pck.id);
    usage[pck.id] = list.filter((p) => { return flatten.indexOf(p.id) > -1; });
  }

  return usage;
};

const getConcatList = (list) => {
  let packages, options;
  const result = [];
  for (const type of TYPES.LIST) {
    packages = list.filter(p => p.type === type.id);
    if (packages.length === 0) continue;
    const config = {
      id: type.id,
      path: type.id
    };
    options = [];
    if (type.isFolder) {
      config.isFolder = true;
      for (const pck of packages) {
        if (pck.options) {
          options.push(...pck.options.filter(option => options.indexOf(option) === -1));
        }
      }
    } else {
      const pck = packages[0];
      if (pck.options) options = [...pck.options];
    }

    if (options.length) config.options = [...options];
    result.push(config);
  }
  return result;
};

const generateJSON = () => {
  const packages = getPackages();
  const styles = getSortedList('styles', ['scheme', 'legacy']);
  const scripts = getSortedList('scripts', ['legacy']);

  const concat = {
    styles: getConcatList(styles),
    scripts: getConcatList(scripts)
  };

  const usage = {
    styles: getUsage(packages, styles, 'styles'),
    scripts: getUsage(packages, scripts, 'scripts')
  };

  const config = {
    styles: styles,
    scripts: scripts,
    concat: concat,
    usage: usage
  };

  const path = root('.config/config.json');
  createFile(path, JSON.stringify(config, null, 4));
};

const generateConfig = async () => {
  generateCore();
  await generateIcons();
  generateJSON();
};

module.exports = generateConfig;
