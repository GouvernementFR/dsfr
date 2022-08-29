const { MODULE, NOMODULE } = require('./supports');

const FILENAMES = [
  {
    name: 'module',
    supports: [MODULE]
  },
  {
    name: 'nomodule',
    supports: [NOMODULE]
  },
  {
    name: 'pre',
    supports: [MODULE, NOMODULE]
  },
  {
    name: 'pre.module',
    supports: [MODULE]
  },
  {
    name: 'pre.nomodule',
    supports: [NOMODULE]
  },
  {
    name: 'define',
    supports: [MODULE, NOMODULE]
  },
  {
    name: 'define.module',
    supports: [MODULE]
  },
  {
    name: 'define.nomodule',
    supports: [NOMODULE]
  },
  {
    name: 'register',
    supports: [MODULE, NOMODULE]
  },
  {
    name: 'register.module',
    supports: [MODULE]
  },
  {
    name: 'register.nomodule',
    supports: [NOMODULE]
  },
  {
    name: 'post',
    supports: [MODULE, NOMODULE]
  },
  {
    name: 'post.module',
    supports: [MODULE]
  },
  {
    name: 'post.nomodule',
    supports: [NOMODULE]
  }
];

module.exports = { FILENAMES };
