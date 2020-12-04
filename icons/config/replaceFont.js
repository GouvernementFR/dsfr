var fs = require('fs');

var contents = fs.readFileSync('icons/font/icons.woff.base64', 'utf8');

module.exports = {
  files: 'packages/core/generated/_icons.scss',
  from: '${icons-base64}',
  to: contents
};
