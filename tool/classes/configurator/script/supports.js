const MODULE = {
  id: 'module',
  filename: 'module',
  format: 'esm'
};

const NOMODULE = {
  id: 'nomodule',
  filename: 'nomodule',
  format: 'iife'
};

const SUPPORTS = [MODULE, NOMODULE];

module.exports = { SUPPORTS, MODULE, NOMODULE };
