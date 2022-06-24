const { I18n } = require('./i18n');

class AggregatedI18n {
  constructor (path, locale = 'fr') {
    this.locale = locale;
    this.main = new I18n('i18n');
    this.secondary = new I18n(`${path}/i18n`);

    const mainDefault = this.main.data.locales.fr;
    const secondaryDefault = this.secondary.hasData ? this.secondary.data.locales.fr : {};
    this.locales = {};
    this.locales.fr = { ...mainDefault, ...secondaryDefault };

    if (locale && locale !== 'fr') {
      const mainLocalised = this.main.data.locales[locale] || {};
      const secondaryLocalised = this.secondary.hasData && this.secondary.data.locales[locale] ? this.secondary.data.locales[locale] : {};
      this.locales[locale] = { ...mainLocalised, ...secondaryLocalised };
    }

    console.log(this.locales);
  }

  getText (key) {
    const keys = key.split('.');
    let text = this._getText(keys, this.locales[this.locale]);
    if (text) return text;
    if (this.locales !== 'fr') {
      text = this._getText(keys, this.locales.fr);
      if (text) return text;
    }
    throw new Error(`missing text ${key} in locale ${this.locale}`);
  }

  _getText (keys, texts) {
    for (const key of keys) {
      texts = texts[key];
      if (!texts) return null;
    }
    return texts;
  }

  get data () {
    return { locales: this.locales };
  }
}

module.exports = { AggregatedI18n };
