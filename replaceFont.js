var fs = require('fs');
 
var contents = fs.readFileSync('packages/icons/font/icons.woff.base64', 'utf8');
var urlStart = 'url("data:font/truetype;charset=utf-8;base64,'
var urlEnd = '") format("truetype")'

module.exports = {
  files: 'packages/icons/generated/_icons.scss',
  from: new RegExp(/(?<=src: )(.*)(?=;)/g),
  to: urlStart + contents + urlEnd,
};