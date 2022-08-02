const { RECOMMENDED, DEPRECATED } = require('./situations');

const RECOMMENDED_KIND = {
  id: 'recommended',
  situations: [RECOMMENDED],
  src: '.recommended',
  dest: '.recommended'
};

const DEPRECATED_KIND = {
  id: 'deprecated',
  situations: [DEPRECATED],
  src: '.deprecated',
  dest: '.deprecated'
};

const FULL_KIND = {
  id: 'full',
  situations: [RECOMMENDED, DEPRECATED],
  src: '.full',
  dest: ''
};

const KINDS = [FULL_KIND, RECOMMENDED_KIND, DEPRECATED_KIND];

module.exports = { KINDS, RECOMMENDED_KIND, DEPRECATED_KIND, FULL_KIND };
