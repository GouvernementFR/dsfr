const root = require('../utilities/root');
const { deleteDir } = require('../utilities/file');

const clean = () => {
  deleteDir(root('public'));
  deleteDir(root('.config'));
  deleteDir(root('_dist'));
  deleteDir(root('_example'));
};

module.exports = clean;
