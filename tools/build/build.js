const getPackages = require('../utilities/packages');
const generateMarkdown = require('../generate/markdown');
const generateCore = require('../generate/core');
const buildStyles = require('./styles');
const buildScripts = require('./scripts');
const { buildExample, buildList, buildMain } = require('./example');
const generatePackage = require('../generate/package');
const { copyScripts, copyStyles, copyTemplates, copyImages, copyAssets } = require('./copy');
const root = require('../utilities/root');
const { lintStyles, lintScripts } = require('../test/lint');
const { getPublicPackage } = require('../utilities/config');
const { deleteDir } = require('../utilities/file');
const global = require('../../package.json');
const log = require('../utilities/log');

const logPackage = (pck) => {
  log(36, pck.toLowerCase());
};

const logPart = (part) => {
  log(34, `# ${part.toUpperCase()} #`, true);
};

const build = async (settings) => {
  log(36, `build ${global.config.namespace} - version ${global.version}`);

  if (settings.clean) deleteDir('public');

  if (settings.core) generateCore();

  if (settings.clean) {
    generatePackage();
    copyImages();
    copyAssets();
  }

  const config = getPublicPackage().config;

  let packages = config.styles;

  let position = 0;
  for (const script of config.scripts) {
    const p = packages.indexOf(script);
    if (p === -1) packages = packages.splice(position, 0, script);
    else position = p + 1;
  }

  for (const pck of packages) {
    if (settings.lint) await lintStyles(pck);
    copyStyles(pck, true);

    if (settings.lint) lintScripts(pck);
    copyScripts(pck, true);
    copyTemplates(pck, true);
  }

  let styles = config.styles;
  let scripts = config.scripts;

  if (settings.packages) {
    packages = settings.packages;
    styles = styles.filter((style) => { return settings.packages.indexOf(style) > -1; });
    scripts = scripts.filter((script) => { return settings.packages.indexOf(script) > -1; });
  }

  if (settings.styles) {
    logPart('styles');

    for (const pck of styles) {
      logPackage(pck);

      try {
        await buildStyles([pck], 'public/packages', 'public/dist/css/', pck, settings.minify, settings.sourcemap);
      } catch (e) {
        console.log(e);
      }
    }

    if (settings.main) {
      logPackage(config.namespace);

      try {
        await buildStyles(config.styles, 'public/packages', 'public/dist/css/', config.namespace, settings.minify, settings.sourcemap);
      } catch (e) {
        console.log(e);
      }
    }
  }

  if (settings.scripts) {
    logPart('scripts');

    for (const pck of scripts) {
      logPackage(pck);

      try {
        await buildScripts([pck], 'public/packages', 'public/dist/js/', pck, settings.minify, settings.legacy, settings.sourcemap);
      } catch (e) {
        console.log(e);
      }
    }

    if (settings.main) {
      logPackage(config.namespace);
      try {
        await buildScripts(config.scripts, 'public/packages', 'public/dist/js/', config.namespace, settings.minify, settings.legacy, settings.sourcemap);
      } catch (e) {
        console.log(e);
      }
    }
  }

  if (settings.examples) {
    logPart('examples');

    for (const pck of packages) {
      try {
        await buildExample(pck, root('public/example'));
      } catch (e) {
        console.log(e);
      }
    }

    if (settings.main) {
      try {
        await buildMain(root('public/example'));
      } catch (e) {
        console.log(e);
      }
    }

    if (settings.list) {
      try {
        await buildList(root('public/example'));
      } catch (e) {
        console.log(e);
      }
    }
  }

  if (settings.markdowns) {
    logPart('markdowns');
    for (const pck of packages) {
      try {
        generateMarkdown(pck);
      } catch (e) {
        console.log(e);
      }
    }
  }
};

module.exports = build;
