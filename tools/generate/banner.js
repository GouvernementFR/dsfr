const global = require('../../package.json');

const getBanner = () => {
  return `${global.config.namespace.toUpperCase()} v${global.version} | utilisation restreinte (voir les conditions générales d'utilisation)`;
};

module.exports = { getBanner };
