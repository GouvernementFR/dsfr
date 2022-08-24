const { RECENT, OUTDATED, LEGACY } = require('./supports');
const { RECOMMENDED, DEPRECATED } = require('./situations');

const RECENT_RECOMMENDED_KIND = {
  id: 'recent-recommended',
  situations: [RECOMMENDED],
  supports: [RECENT],
  src: 'recent.recommended',
  dest: '.recent.recommended'
};

const RECENT_DEPRECATED_KIND = {
  id: 'recent-deprecated',
  situations: [DEPRECATED],
  supports: [RECENT],
  src: 'recent.deprecated',
  dest: '.recent.deprecated'
};

const OUTDATED_RECOMMENDED_KIND = {
  id: 'outdated-recommended',
  situations: [RECOMMENDED],
  supports: [OUTDATED],
  src: 'outdated.recommended',
  dest: '.outdated.recommended'
};

const OUTDATED_DEPRECATED_KIND = {
  id: 'outdated-deprecated',
  situations: [DEPRECATED],
  supports: [OUTDATED],
  src: 'outdated.deprecated',
  dest: '.outdated.deprecated'
};

const LEGACY_RECOMMENDED_KIND = {
  id: 'legacy-recommended',
  situations: [RECOMMENDED],
  supports: [LEGACY],
  src: 'legacy.recommended',
  dest: '.legacy.recommended'
};

const LEGACY_DEPRECATED_KIND = {
  id: 'legacy-deprecated',
  situations: [DEPRECATED],
  supports: [LEGACY],
  src: 'legacy.deprecated',
  dest: '.legacy.deprecated'
};

const MODERN_KIND = {
  id: 'modern',
  situations: [RECOMMENDED, DEPRECATED],
  supports: [RECENT, OUTDATED],
  src: 'modern',
  dest: '.modern'
};

const RECOMMENDED_KIND = {
  id: 'recommended',
  situations: [RECOMMENDED],
  supports: [RECENT, OUTDATED, LEGACY],
  src: 'recommended',
  dest: '.recommended'
};

const MODERN_RECOMMENDED_KIND = {
  id: 'modern-recommended',
  situations: [RECOMMENDED],
  supports: [RECENT, OUTDATED],
  src: 'modern.recommended',
  dest: '.modern.recommended'
};

const FULL_KIND = {
  id: 'full',
  situations: [RECOMMENDED, DEPRECATED],
  supports: [RECENT, OUTDATED, LEGACY],
  src: 'full',
  dest: ''
};

const KINDS = [FULL_KIND, RECENT_RECOMMENDED_KIND, RECENT_DEPRECATED_KIND, OUTDATED_RECOMMENDED_KIND, OUTDATED_DEPRECATED_KIND, LEGACY_RECOMMENDED_KIND, LEGACY_DEPRECATED_KIND, MODERN_KIND, RECOMMENDED_KIND, MODERN_RECOMMENDED_KIND];

module.exports = { KINDS };
