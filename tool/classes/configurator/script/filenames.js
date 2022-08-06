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
    types: [MODULE, NOMODULE]
  },
  {
    name: 'define.legacy',
    types: [NOMODULE]
  },
  {
    name: 'register',
    types: [MODULE, NOMODULE]
  },
  {
    name: 'register.legacy',
    types: [NOMODULE]
  },
  {
    name: 'post',
    types: [MODULE, NOMODULE]
  },
  {
    name: 'post.legacy',
    types: [NOMODULE]
  }
];

module.exports = { FILENAMES };
