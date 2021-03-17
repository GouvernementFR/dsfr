const { createFile } = require('../utilities/file');
const root = require('../utilities/root');
const log = require('../utilities/log');

const buildRedirect = () => {
  createFile(root('public/_redirects'), '# Redirects from what the browser requests to what we serve\n/             /example/');
  log(38, '_redirects');
};

module.exports = buildRedirect;
