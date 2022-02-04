const log = require('../utilities/log');
const global = require('../../package.json');
const { buildStyle } = require('./styles');
const root = require('../utilities/root');
const ejs = require('ejs');
const { html: beautify } = require('js-beautify');
const { createFile, deleteDir } = require('../utilities/file');
const fs = require('fs');
const { standaloneFontSubset } = require('../generate/font-subset');
const generateConfig = require('../generate/config');
const beautyOpts = beautify.defaultOptions();
beautyOpts.end_with_newline = true;
beautyOpts.max_preserve_newlines = 0;
beautyOpts.indent_inner_html = true;
beautyOpts.indent_handlebars = true;

beautyOpts.inline = [];

const standalone = async (settings) => {
  log(36, `standalone ${global.config.namespace} - version ${global.version}`);

  deleteDir(root('standalone'));
  deleteDir(root('.config'));

  await generateConfig();

  await standaloneFontSubset();

  if (settings.styles) {
    try {
      await buildStyle(`@import '${root('src/component/connect/standalone')}';`, root('standalone/connect.standalone'), settings.minify, settings.sourcemap);
    } catch (e) {
      log.error(e);
    }
  }

  if (settings.examples) {
    try {
      const page = fs.readFileSync(root('src/component/connect/standalone/index.ejs'), {
        encoding: 'utf8',
        flag: 'r'
      });
      const html = ejs.render(page, {
        path: root('src/component/connect/example/index.ejs'),
        root: root.toString()
      });
      const beautified = beautify(html, beautyOpts);

      createFile('standalone/index.html', beautified, true);
      log(38, 'standalone/index.html');
    } catch (e) {
      log.error(e);
    }
  }
};

module.exports = standalone;
