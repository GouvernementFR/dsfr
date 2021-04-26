const global = require('../../package.json');
const root = require('../utilities/root');
const { createFile } = require('../utilities/file');
const { getPackages, getPackageYML } = require('../utilities/config');
const fs = require('fs');
const log = require('../utilities/log');

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

    dps.forEach((p) => { if (list.indexOf(p) === -1) throw new Error(`Error in ${type} dependencies of package ${pck}: ${p} doesn't exist`); });
    dependencies[pck] = dps;
  }
  return dependencies;
};

const getSortedList = (type) => {
  const packages = getPackages();
  const levels = {};

  const list = [];
  const ext = EXTENSIONS[type];
  for (const pck of packages) {
    if (fs.existsSync(root(`src/${pck}/main.${ext}`))) list.push(pck);
    levels[pck] = -1;
  }

  const dependencies = getDependencies(list, type, true);

  let complete = false;

  while (!complete) {
    complete = true;

    for (const pck of list) {
      if (levels[pck] > -1) continue;
      if (dependencies[pck].length === 0) {
        levels[pck] = 0;
        continue;
      }
      const lvls = dependencies[pck].map((d) => { return levels[d]; });
      if (lvls.some((lvl) => { return lvl === -1; })) {
        complete = false;
        continue;
      }
      const level = Math.max(...lvls) + 1;
      levels[pck] = level;
    }
  }

  list.sort((a, b) => { return levels[a] - levels[b]; });

  return list;
};

const getUsage = (list, type) => {
  const dependencies = getDependencies(list, type, false);
  const usage = {};

  for (const pck of list) {
    const dps = dependencies[pck];
    const flatten = [...dps];
    for (const p of dps) flatten.push(...dependencies[p]);
    flatten.push(pck);
    usage[pck] = list.filter((p) => { return flatten.indexOf(p) > -1; });
  }

  return usage;
};

const generatePackage = () => {
  const styles = getSortedList('styles');
  const scripts = getSortedList('scripts');

  const usage = {
    styles: getUsage(styles, 'styles'),
    scripts: getUsage(scripts, 'scripts')
  };

  const content = {
    name: `${global.config.organisation}/${global.config.namespace}`,
    version: global.version,
    description: global.description,
    repository: global.repository,
    author: global.author,
    license: global.license,
    engines: global.engines,
    directories: {
      lib: 'dist',
      example: 'example'
    },
    config: {
      ...global.config,
      styles: styles,
      scripts: scripts,
      usage: usage
    },
    publishConfig: {
      access: 'public'
    }
  };

  const path = root('public/package.json');
  createFile(path, JSON.stringify(content, null, 4));
};

module.exports = generatePackage;
