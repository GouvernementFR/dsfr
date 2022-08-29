const RECOMMENDED = {
  id: 'recommended',
  path: 'style/',
  module: '-recommended'
};

const DEPRECATED = {
  id: 'deprecated',
  path: 'deprecated/style/',
  module: '-deprecated'
};

const SITUATIONS = [RECOMMENDED, DEPRECATED];

module.exports = { SITUATIONS, RECOMMENDED, DEPRECATED };
