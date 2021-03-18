const { createFile } = require('../utilities/file');
const root = require('../utilities/root');
const log = require('../utilities/log');

const buildRouting = async () => {
  createFile(root('public/_redirects'), '# Redirects\n/             /example/');
  log(38, '_redirects');
  createFile(root('public/_headers'), '# Headers\n/*\n  Access-Control-Allow-Origin: *\n\n/dist/favicons/manifest.webmanifest\n  Content-Type: application/manifest+json; charset=UTF-8\n');
  log(38, '_headers');
};

module.exports = buildRouting;
