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
    name: 'pre.legacy',
    supports: [NOMODULE]
  },
  {
    name: 'define',
    supports: [MODULE, NOMODULE]
  },
  {
    name: 'define.legacy',
    supports: [NOMODULE]
  },
  {
    name: 'register',
    supports: [MODULE, NOMODULE]
  },
  {
    name: 'register.legacy',
    supports: [NOMODULE]
  },
  {
    name: 'post',
    supports: [MODULE, NOMODULE]
  },
  {
    name: 'post.legacy',
    supports: [NOMODULE]
  }
];

module.exports = { FILENAMES };
