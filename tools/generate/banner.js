const global = require('../../package.json');

const getBanner = () => {
  return `${global.config.namespace.toUpperCase()} v${global.version} | licence ${global.license}`;
};

module.exports = { getBanner };
