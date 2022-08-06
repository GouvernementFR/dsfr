const BASE = {
  id: 'base',
  paths: ['script'],
  ser: '.base',
  dest: '.base'
};

const DEPRECATED = {
  id: 'deprecated',
  paths: ['script/deprecated'],
  src: '.deprecated',
  dest: '.deprecated'
};

const UNIFIED = {
  id: 'unified',
  paths: [].concat(BASE.paths, DEPRECATED.paths),
  src: '.full',
  dest: ''
};

const KINDS = [BASE, DEPRECATED, UNIFIED];

module.exports = { KINDS, BASE, DEPRECATED, UNIFIED };
