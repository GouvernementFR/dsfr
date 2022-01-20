const fs = require('fs');
const root = require('./root');

const template = (path) => {
  const templatePath = root(path);
  const toto = fs.readFileSync(templatePath, {
    encoding: 'utf8',
    flag: 'r'
  });
  return toto;
};

module.exports = template;
