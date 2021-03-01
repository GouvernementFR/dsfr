const getPackages = require('../utilities/packages');
const generateMarkdown = require('../generate/markdown');
const generateCore = require('../generate/core');
const buildStyles = require('./styles');
const buildScripts = require('./scripts');
const { buildExample, buildMap } = require('./example');
const generatePackage = require('../generate/package');
const { copyScripts, copyStyles, copyTemplates, copyFonts, copyAssets } = require('./copy');
const root = require('../utilities/root');
const { lintStyles, lintScripts } = require('../test/lint');
const { getPublicPackage } = require('../utilities/config');
const { deleteDir } = require('../utilities/file');

const build = async (clean, minify, release) => {
  if (clean) {
    deleteDir('public');
    generateCore();
    generatePackage();
    copyFonts();
    copyAssets();
  };

  const config = getPublicPackage().config;

  const packages = getPackages();

  for (const pck of packages) {
    if (release) await lintStyles(pck);
    copyStyles(pck);

    if (release) lintScripts(pck);
    copyScripts(pck);
    copyTemplates(pck);
  }

  /*

  if (!packages) dependencies = all;
  else if (!depends) {
    dependencies = packages;
  } else {
    dependencies = all.filter((p) => {
      return packages.indexOf(p) > -1 || packages.some((d) => { return config.dependencies[d].css.indexOf(p) > -1; });
    });
  }

   */

  for (const pck of packages) {
    console.log('\n\r', '\x1b[34m', `# ${pck.toUpperCase()} #`, '\x1b[0m');

    if (release) {
      try {
        generateMarkdown(pck);
      } catch (e) {
        console.log(e);
      }
    }

    try {
      await buildStyles([pck], 'public/packages', `public/dist/css/${pck}`, pck, minify, release);
    } catch (e) {
      console.log(e);
    }

    try {
      await buildScripts([pck], 'public/packages', `public/dist/js/${pck}`, pck, minify, true, release);
    } catch (e) {
      console.log(e);
    }

    try {
      await buildExample(pck, root('public/example'));
    } catch (e) {
      console.log(e);
    }
  }

  if (release) {
    console.log('\n\r', '\x1b[34m', `# ${config.namespace.toUpperCase()} #`, '\x1b[0m');

    try {
      await buildStyles(packages, 'public/packages', 'public/dist/css/', config.namespace, true);
    } catch (e) {
      console.log(e);
    }

    try {
      await buildScripts(packages, 'public/packages', 'public/dist/js/', config.namespace, true, true);
    } catch (e) {
      console.log(e);
    }
  }

  if (clean) {
    try {
      await buildMap(root('public/example'));
    } catch (e) {
      console.log(e);
    }
  }
};

module.exports = build;
