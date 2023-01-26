const log = require('../utilities/log');
const global = require('../../package.json');
const { getPackages } = require('../utilities/config');
const { lint } = require('./lint');
const testPa11y = require('./pa11y');
const testing = async (settings) => {
  log(36, `test ${global.config.namespace} - version ${global.version}`);

  const packages = getPackages().filter(pck => settings.packages && settings.packages.length ? settings.packages.indexOf(pck.id) > -1 : true);

  log.section('lint');
  await lint(packages);

  log.section('pa11y');
  await testPa11y(packages);
};

module.exports = { testing };
