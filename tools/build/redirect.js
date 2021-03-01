const { createFile } = require('../utilities/file');
const root = require('../utilities/root');

const buildRedirect = () => {
  createFile(root('public/_redirects'), '# Redirects from what the browser requests to what we serve\n/             /example/');
};

module.exports = buildRedirect;
