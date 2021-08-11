const path = require('path');

const _root = path.normalize(`${__dirname}/../../`);

const root = (rel) => {
  return path.join(_root, rel);
};

root.toString = () => {
  return _root;
};

module.exports = root;
