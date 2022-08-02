const { MODULE, NOMODULE } = require('./supports');

const PRE = {
  name: 'pre',
  supports: [MODULE, NOMODULE]
};

const PRE_MODULE = {
  name: 'pre.module',
  supports: [MODULE]
};

const PRE_NOMODULE = {
  name: 'pre.nomodule',
  supports: [NOMODULE]
};

const DEFINE = {
  name: 'define',
  supports: [MODULE, NOMODULE]
};

const DEFINE_MODULE = {
  name: 'define.module',
  supports: [MODULE]
};

const DEFINE_NOMODULE = {
  name: 'define.nomodule',
  supports: [NOMODULE]
};

const REGISTER = {
  name: 'register',
  supports: [MODULE, NOMODULE]
};

const REGISTER_MODULE = {
  name: 'register.module',
  supports: [MODULE]
};

const REGISTER_NOMODULE = {
  name: 'register.nomodule',
  supports: [NOMODULE]
};

const POST = {
  name: 'post',
  supports: [MODULE, NOMODULE]
};

const POST_MODULE = {
  name: 'post.module',
  supports: [MODULE]
};

const POST_NOMODULE = {
  name: 'post.nomodule',
  supports: [NOMODULE]
};

const LEVELS = [
  [PRE, PRE_MODULE, PRE_NOMODULE],
  [DEFINE, DEFINE_MODULE, DEFINE_NOMODULE],
  [REGISTER, REGISTER_MODULE, REGISTER_NOMODULE],
  [POST, POST_MODULE, POST_NOMODULE]
];

const FILENAMES = LEVELS.flat(1);

module.exports = { FILENAMES, LEVELS };
