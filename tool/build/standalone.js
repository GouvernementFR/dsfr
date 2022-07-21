const log = require('../utilities/log');
const global = require('../../package.json');
const { buildStyles } = require('./styles');
const root = require('../utilities/root');
const { html: beautify } = require('js-beautify');
const { deleteDir } = require('../utilities/file');
const { standaloneFontSubset } = require('../generate/font-subset');
const generateConfig = require('../generate/config');
const { getPackages } = require('../utilities/config');
const { buildScript } = require('./scripts');
const { buildStandaloneExample } = require('./example');
const { I18n } = require('../classes/i18n/i18n');
const beautyOpts = beautify.defaultOptions();
beautyOpts.end_with_newline = true;
beautyOpts.max_preserve_newlines = 0;
beautyOpts.indent_inner_html = true;
beautyOpts.indent_handlebars = true;

beautyOpts.inline = [];

const standalone = async (settings) => {
  log(36, `standalone ${global.config.namespace} - version ${global.version}`);

  if (settings.clean) {
    deleteDir(root('standalone'));
    deleteDir(root('.config'));
  }

  if (settings.clean || settings.config) {
    await generateConfig();
  }

  await I18n.merge();

  const packages = getPackages().filter(pck => settings.packages && (settings.packages.length ? settings.packages.indexOf(pck.id) > -1 : true));

  if (settings.styles) {
    log.section('styles', true);
    for (const pck of packages) {
      if (!pck.standalone) continue;
      if (!pck.standalone.style) continue;
      log.info(pck.id.toLowerCase());
      if (pck.fontSubset) {
        try {
          await standaloneFontSubset(pck);
        } catch (e) {
          log.error(e);
        }
      }

      try {
        await buildStyles(pck, settings.minify, settings.sourcemap, true);
      } catch (e) {
        log.error(e);
      }
    }
  }

  if (settings.scripts) {
    log.section('scripts', true);

    for (const pck of packages) {
      if (!pck.standalone) continue;
      if (!pck.standalone.script) continue;
      log.info(pck.id.toLowerCase());

      try {
        await buildScript(pck, settings.minify, settings.legacy, settings.sourcemap, true);
      } catch (e) {
        log.error(e);
      }
    }
  }

  if (settings.examples) {
    log.section('examples', true);

    for (const pck of packages) {
      if (pck.draft) continue;
      if (!pck.standalone) continue;
      try {
        await buildStandaloneExample(pck, settings.locale);
      } catch (e) {
        log.error(e);
      }
    }
  }
};

module.exports = standalone;
