const fs = require('fs');
const yaml = require('js-yaml');

class I18nLocale {
  constructor (file, path) {
    this.locale = file.replace('.yml', '');
    const yml = fs.readFileSync(`${path}/${file}`, {
      encoding: 'utf8',
      flag: 'r'
    });
    this.data = yaml.load(yml);
  }

  get entry () {
    return [this.locale, this.data];

  }
}

module.exports = { I18nLocale };
