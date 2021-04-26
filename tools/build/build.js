const root = require('../utilities/root');
const generateCore = require('../generate/core');
const buildStyles = require('./styles');
const buildScripts = require('./scripts');
const { buildExample, buildList, buildMain } = require('./example');
const generatePackage = require('../generate/package');
const { generateMainScript, generateMainStyle } = require('../generate/main');
const { copyImages, copyAssets, copyPackages } = require('./copy');
const { getPublicPackage } = require('../utilities/config');
const { deleteDir } = require('../utilities/file');
const global = require('../../package.json');
const log = require('../utilities/log');
const testPa11y = require('../test/pa11y');
const { generateIcons } = require('../generate/icons');
const { generateMarkdown, completeGlobalMarkdown } = require('../generate/markdown');
const { lint } = require('../test/lint');

const build = async (settings) => {
  log(36, `build ${global.config.namespace} - version ${global.version}`);

  if (settings.clean) {
    deleteDir(root('public'));
    generateCore();
    await generateIcons();
    generatePackage();
    generateMainStyle();
    generateMainScript();
    copyImages();
    copyAssets();
  }

  copyPackages();

  if (settings.test) {
    log.section('lint');
    await lint(settings.packages);
  }

  const config = getPublicPackage().config;

  let packages = config.styles;

  let position = 0;
  for (const script of config.scripts) {
    const p = packages.indexOf(script);
    if (p === -1) packages = packages.splice(position, 0, script);
    else position = p + 1;
  }

  let styles = config.styles;
  let scripts = config.scripts;

  if (settings.packages) {
    packages = settings.packages;
    styles = styles.filter((style) => { return settings.packages.indexOf(style) > -1; });
    scripts = scripts.filter((script) => { return settings.packages.indexOf(script) > -1; });
  }

  if (settings.styles) {
    log.section('styles', true);

    for (const pck of styles) {
      log.info(pck.toLowerCase());

      try {
        await buildStyles([pck], 'public/src', 'public/dist/css/', pck, settings.minify, settings.sourcemap);
      } catch (e) {
        log.error(e);
      }
    }

    if (settings.main) {
      log.info(config.namespace.toLowerCase());

      try {
        await buildStyles('main', 'public/src', 'public/dist/css/', config.namespace, settings.minify, settings.sourcemap);
      } catch (e) {
        log.error(e);
      }
    }
  }

  if (settings.scripts) {
    log.section('scripts', true);

    for (const pck of scripts) {
      log.info(pck.toLowerCase());

      try {
        await buildScripts([pck], 'public/src', 'public/dist/js/', pck, settings.minify, settings.legacy, settings.sourcemap);
      } catch (e) {
        log.error(e);
      }
    }

    if (settings.main) {
      log.info(config.namespace.toLowerCase());
      try {
        await buildScripts('main', 'public/src', 'public/dist/js/', config.namespace, settings.minify, settings.legacy, settings.sourcemap);
      } catch (e) {
        log.error(e);
      }
    }
  }

  if (settings.examples) {
    log.section('examples', true);

    for (const pck of packages) {
      try {
        await buildExample(pck, root('public/example'));
      } catch (e) {
        log.error(e);
      }
    }

    if (settings.main || settings.clean) {
      try {
        await buildMain(root('public/example'));
      } catch (e) {
        log.error(e);
      }
    }

    if (settings.list || settings.clean) {
      try {
        await buildList(root('public/example'));
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
