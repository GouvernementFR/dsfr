const root = require('../utilities/root');
const generateMarkdown = require('../generate/markdown');
const generateCore = require('../generate/core');
const buildStyles = require('./styles');
const buildScripts = require('./scripts');
const { buildExample, buildList, buildMain } = require('./example');
const generatePackage = require('../generate/package');
const { copyImages, copyAssets, copyPackages } = require('./copy');
const { getPublicPackage } = require('../utilities/config');
const { deleteDir } = require('../utilities/file');
const global = require('../../package.json');
const log = require('../utilities/log');
const testPa11y = require('../test/pa11y');
const { lint } = require('../test/lint');

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

  copyPackages();

  if (settings.test) await lint(settings.packages);

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
    logPart('styles');

    for (const pck of styles) {
      logPackage(pck);

      try {
        await buildStyles([pck], 'public/src', 'public/dist/css/', pck, settings.minify, settings.sourcemap);
      } catch (e) {
        console.log(e);
      }
    }

    if (settings.main) {
      logPackage(config.namespace);

      try {
        await buildStyles(config.styles, 'public/src', 'public/dist/css/', config.namespace, settings.minify, settings.sourcemap);
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
        await buildScripts([pck], 'public/src', 'public/dist/js/', pck, settings.minify, settings.legacy, settings.sourcemap);
      } catch (e) {
        console.log(e);
      }
    }

    if (settings.main) {
      logPackage(config.namespace);
      try {
        await buildScripts(config.scripts, 'public/src', 'public/dist/js/', config.namespace, settings.minify, settings.legacy, settings.sourcemap);
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

    if (settings.main || settings.clean) {
      try {
        await buildMain(root('public/example'));
      } catch (e) {
        console.log(e);
      }
    }

    if (settings.list || settings.clean) {
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

  if (settings.test) await testPa11y(settings.packages);
};

module.exports = build;
