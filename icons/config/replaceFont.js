var fs = require('fs');

var contents = fs.readFileSync('icons/font/icons.woff.base64', 'utf8');

module.exports = {
  files: 'packages/core/generated/styles/_icons.scss',
  from: '${icons-base64}',
  to: contents
};
