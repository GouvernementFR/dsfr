const root = require('../utilities/root');
const { deleteDir } = require('../utilities/file');

const clean = () => {
  deleteDir(root('public'));
  deleteDir(root('.config'));
  deleteDir(root('dist'));
  deleteDir(root('example'));
};

module.exports = clean;
