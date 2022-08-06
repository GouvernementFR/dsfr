const BASE = {
  id: 'base',
  paths: ['script'],
  src: '.base',
  dest: '.base'
};

const DEPRECATED = {
  id: 'deprecated',
  paths: ['deprecated/script'],
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
