const { BASE, LEGACY } = require('./filenames');
const { RECOMMENDED, DEPRECATED } = require('./situations');

const BASE_RECOMMENDED_KIND = {
  id: 'base.recommended',
  situations: [RECOMMENDED],
  filenames: [BASE],
  src: 'base.recommended',
  dest: '.base.recommended'
};

const BASE_DEPRECATED_KIND = {
  id: 'base.deprecated',
  situations: [DEPRECATED],
  filenames: [BASE],
  src: 'base.deprecated',
  dest: '.base.deprecated'
};

const LEGACY_RECOMMENDED_KIND = {
  id: 'legacy.recommended',
  situations: [RECOMMENDED],
  filenames: [LEGACY],
  src: 'legacy.recommended',
  dest: '.legacy.recommended'
};

const LEGACY_DEPRECATED_KIND = {
  id: 'legacy.deprecated',
  situations: [DEPRECATED],
  filenames: [LEGACY],
  src: 'legacy.deprecated',
  dest: '.legacy.deprecated'
};

const BASE_KIND = {
  id: 'base',
  situations: [RECOMMENDED, DEPRECATED],
  filenames: [BASE],
  src: 'base',
  dest: '.base'
};

const RECOMMENDED_KIND = {
  id: 'recommended',
  situations: [RECOMMENDED],
  filenames: [BASE, LEGACY],
  src: 'recommended',
  dest: '.recommended'
};

const FULL_KIND = {
  id: 'full',
  situations: [RECOMMENDED, DEPRECATED],
  filenames: [BASE, LEGACY],
  src: 'full',
  dest: ''
};

const KINDS = [BASE_RECOMMENDED_KIND, BASE_DEPRECATED_KIND, LEGACY_RECOMMENDED_KIND, LEGACY_DEPRECATED_KIND, BASE_KIND, RECOMMENDED_KIND, FULL_KIND];

module.exports = { KINDS };
