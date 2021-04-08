const global = require('../../package.json');

const getBanner = () => {
  return `${global.config.namespace.toUpperCase()} v${global.version} | restricted use`;
};

module.exports = { getBanner };
