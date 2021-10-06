const buildStyles = require('./styles');
const buildScript = require('./scripts');
const { buildExample } = require('./example');
const { concatenate } = require('../generate/concatenate');
const { copyImages, copyAssets } = require('./copy');
const { getPackages } = require('../utilities/config');
const global = require('../../package.json');
const log = require('../utilities/log');
const testPa11y = require('../test/pa11y');
const { generateMarkdown } = require('../generate/markdown');
const { lint } = require('../test/lint');
const generateConfig = require('../generate/config');
const clean = require('../utilities/clean');

const build = async (settings) => {
  log(36, `build ${global.config.namespace} - version ${global.version}`);

  if (settings.clean) {
    clean();
    await generateConfig();
    copyImages();
    copyAssets();
  }

  concatenate();

  const packages = getPackages().filter(pck => settings.packages && settings.packages.length ? settings.packages.indexOf(pck.id) > -1 : true);

  if (settings.test) {
    log.section('lint');
    await lint(packages);
  }

  if (settings.styles) {
    log.section('styles', true);

    for (const pck of packages) {
      if (!pck.style) continue;
      log.info(pck.id.toLowerCase());
      try {
        await buildStyles(pck, settings.minify, settings.sourcemap);
      } catch (e) {
        log.error(e);
      }
    }
  }

  if (settings.scripts) {
    log.section('scripts', true);

    for (const pck of packages) {
      if (!pck.script) continue;
      log.info(pck.id.toLowerCase());

      try {
        await buildScript(pck, settings.minify, settings.legacy, settings.sourcemap);
      } catch (e) {
        log.error(e);
      }
    }
  }

  if (settings.examples) {
    log.section('examples', true);

    for (const pck of packages) {
      if (pck.draft) continue;
      try {
        await buildExample(pck);
      } catch (e) {
        log.error(e);
      }
    }
  }

  if (settings.markdowns) {
    log.section('markdowns', true);
    for (const pck of packages) {
      try {
        generateMarkdown(pck, packages);
      } catch (e) {
        log.error(e);
      }
    }
  }

  if (settings.test) {
    log.section('pa11y');
    await testPa11y(packages);
  }
};

module.exports = build;
