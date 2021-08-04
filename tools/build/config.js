const generateCore = require('../generate/core');
const { generateMainStyles, generateMainScripts } = require('../generate/main');
const { generateIcons } = require('../generate/icons');
const { copyImages, copyAssets } = require('./copy');
const root = require('../utilities/root');
const { createFile, deleteDir } = require('../utilities/file');
const { getPackages, getPackageYML } = require('../utilities/config');
const fs = require('fs');

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

const getSortedList = (type) => {
  const packages = getPackages();
  const levels = {};

  const list = [];
  const ext = EXTENSIONS[type];
  for (const pck of packages) {
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

  list.sort((a, b) => { return levels[a] - levels[b]; });

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

const generateJSON = () => {
  const packages = getPackages();
  const styles = getSortedList('styles');
  const scripts = getSortedList('scripts');

  const usage = {
    styles: getUsage(packages, styles, 'styles'),
    scripts: getUsage(packages, scripts, 'scripts')
  };

  const config = {
    styles: styles,
    scripts: scripts,
    usage: usage
  };

  const path = root('.config/config.json');
  createFile(path, JSON.stringify(config, null, 4));
};

const generateConfig = async () => {
  deleteDir(root('.config'));
  generateCore();
  await generateIcons();
  generateJSON();
  generateMainStyles();
  generateMainScripts();
};

module.exports = generateConfig;
