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

  getText (key) {
    let text = this.data;
    const keys = key.split('.');
    for (const k of keys) {
      text = text[k];
      if (!text) return '';
    }
    return text;
  }

  get entry () {
    return [this.locale, this.data];
  }
}

module.exports = { I18nLocale };
