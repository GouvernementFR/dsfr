const TYPES = {
  CORE: {
    id: 'core',
    isFolder: false
  },
  SCHEME: {
    id: 'scheme',
    isFolder: false
  },
  LEGACY: {
    id: 'legacy',
    isFolder: false
  },
  COMPONENT: {
    id: 'component',
    isFolder: true
  },
  PATTERN: {
    id: 'pattern',
    isFolder: true
  },
  PAGE: {
    id: 'page',
    isFolder: true
  }
};

TYPES.LIST = [TYPES.CORE, TYPES.SCHEME, TYPES.LEGACY, TYPES.COMPONENT, TYPES.PATTERN, TYPES.PAGE];

module.exports = TYPES;

