const fs = require('fs');
const { I18nLocale } = require('./i18n-locale');

class I18nPackage {
  constructor (path) {
    this.path = `${path}/i18n`;
    this._hasData = false;
    this.locales = [];
    if (fs.existsSync(this.path)) this.parse();
  }

  parse () {
    const entries = fs.readdirSync(this.path, { withFileTypes: true });

    for (const entry of entries) if (entry.isFile() && entry.name.indexOf('.yml') > -1) this.locales.push(new I18nLocale(entry.name, this.path));

    this._hasData = this.locales.length > 0;
  }

  get hasData () {
    return this._hasData;
  }

  get data () {
    const entries = this.locales.map(locale => locale.entry);
    return Object.fromEntries(entries);
  }
}

module.exports = { I18nPackage };
