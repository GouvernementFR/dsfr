const fs = require('fs');
const { I18nLocale } = require('./i18n-locale');

const { SRC } = require('../src');

class I18nPart {
  constructor (part) {
    this.path = `${SRC}${part.path}_content/i18n`;
    this.locales = [];
    this.init();
  }

  init () {
    if (!fs.existsSync(this.path)) return;
    const entries = fs.readdirSync(this.path, { withFileTypes: true });

    for (const entry of entries) if (entry.isFile() && entry.name.indexOf('.yml') > -1) this.locales.push(new I18nLocale(entry.name, this.path));

    this._has = this.locales.length > 0;
  }

  get has () {
    return this._has;
  }

  get data () {
    const entries = this.locales.map(locale => locale.entry);
    return Object.fromEntries(entries);
  }
}

module.exports = { I18nPart };
