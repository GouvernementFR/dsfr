const global = require('../../package.json');

const getBanner = () => {
  return `${global.config.namespace.toUpperCase()} v${global.version} | SPDX-License-Identifier: MIT | License-Filename: LICENSE.md | restricted use (see terms and conditions)`;
};

module.exports = { getBanner };
