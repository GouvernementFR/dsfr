const global = require('../../package.json');

const getBanner = () => {
  return `${global.config.namespace.toUpperCase()} v${global.version} | Not for personal use`;
};

module.exports = { getBanner };
