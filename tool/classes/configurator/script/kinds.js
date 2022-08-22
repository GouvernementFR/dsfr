const { RECOMMENDED, DEPRECATED } = require('./situations');

const BASE_KIND = {
  id: 'base',
  situations: [RECOMMENDED],
  src: '.base',
  dest: '.base'
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

const KINDS = [BASE_KIND, DEPRECATED_KIND, FULL_KIND];

module.exports = { KINDS, BASE_KIND, DEPRECATED_KIND, FULL_KIND };
