const root = require('../utilities/root');
const buildStyles = require('./styles');
const buildScripts = require('./scripts');
const { buildExample, buildList, buildMain } = require('./example');
const { concatenate } = require('../generate/concatenate');
const { copyImages, copyAssets } = require('./copy');
const { getPublicPackage,
  getConfigJSON
} = require('../utilities/config');
const global = require('../../package.json');
const log = require('../utilities/log');
const testPa11y = require('../test/pa11y');
const { generateMarkdown, completeGlobalMarkdown } = require('../generate/markdown');
const { lint } = require('../test/lint');
const generateConfig = require('../generate/config');
const clean = require('../utilities/clean');

const build = async (settings) => {
  log(36, `build ${global.config.namespace} - version ${global.version}`);

  clean();
  await generateConfig();
  concatenate();
  copyImages();
  copyAssets();

  if (settings.test) {
    log.section('lint');
    await lint(settings.packages);
  }

  const config = getConfigJSON();
  /*
  let packages = config.styles;

  let position = 0;
  for (const script of config.scripts) {
    const p = packages.indexOf(script);
    if (p === -1) packages = packages.splice(position, 0, script);
    else position = p + 1;
  }
   */

  let styles = config.styles;
  let scripts = config.scripts;

  if (settings.packages) {
    // packages = settings.packages;
    styles = styles.filter((style) => { return settings.packages.indexOf(style.id) > -1; });
    scripts = scripts.filter((script) => { return settings.packages.indexOf(script.id) > -1; });
  }

  if (settings.styles) {
    log.section('styles', true);

    for (const pck of styles) {
      try {
        await buildStyles(pck.id, pck.path, pck.options, settings.minify, settings.sourcemap);
      } catch (e) {
        log.error(e);
      }
    }

    return;

    if (settings.main) {
      log.info(config.namespace.toLowerCase());

      try {
        await buildStyles('main', 'src', 'dist', global.config.namespace, settings.minify, settings.sourcemap);
      } catch (e) {
        log.error(e);
      }
    }
  }

  return;

  if (settings.scripts) {
    log.section('scripts', true);

    for (const pck of scripts) {
      log.info(pck.toLowerCase());

      try {
        await buildScripts([pck], 'src', 'dist', pck, settings.minify, settings.legacy, settings.sourcemap);
      } catch (e) {
        log.error(e);
      }
    }

    if (settings.main) {
      log.info(config.namespace.toLowerCase());
      try {
        await buildScripts('main', 'src', 'dist', global.config.namespace, settings.minify, settings.legacy, settings.sourcemap);
      } catch (e) {
        log.error(e);
      }
    }
  }

  if (settings.examples) {
    log.section('examples', true);

    for (const pck of packages) {
      try {
        await buildExample(pck, root('example'));
      } catch (e) {
        log.error(e);
      }
    }

    if (settings.main || settings.clean) {
      try {
        await buildMain(root('example'));
      } catch (e) {
        log.error(e);
      }
    }

    if (settings.list || settings.clean) {
      try {
        await buildList(root('example'));
      } catch (e) {
        log.error(e);
      }
    }
  }

  if (settings.markdowns) {
    log.section('markdowns', true);
    for (const pck of packages) {
      try {
        generateMarkdown(pck);
      } catch (e) {
        log.error(e);
      }
    }

    if (settings.main || settings.clean) {
      try {
        completeGlobalMarkdown();
      } catch (e) {
        log.error(e);
      }
    }
  }

  if (settings.test) {
    log.section('pa11y');
    await testPa11y(settings.packages);
  }
};

module.exports = build;
