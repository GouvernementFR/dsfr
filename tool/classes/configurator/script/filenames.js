const { MODULE, NOMODULE } = require('./types');

const FILENAMES = [
  {
    name: 'module',
    types: [MODULE]
  },
  {
    name: 'nomodule',
    types: [NOMODULE]
  },
  {
    name: 'pre',
    types: [MODULE, NOMODULE]
  },
  {
    name: 'pre.legacy',
    types: [NOMODULE]
  },
  {
    name: 'define',
    types: [MODULE]
  },
  {
    name: 'define.legacy',
    types: [MODULE, NOMODULE]
  },
  {
    name: 'register',
    types: [MODULE]
  },
  {
    name: 'register.legacy',
    types: [MODULE, NOMODULE]
  },
  {
    name: 'post',
    types: [MODULE]
  },
  {
    name: 'post.legacy',
    types: [MODULE, NOMODULE]
  }
];

module.export = { FILENAMES };
