const { I18n } = require('./i18n');

class AggregatedI18n {
  constructor (path, locale = null) {
    this.main = new I18n('i18n');
    this.secondary = new I18n(`${path}/i18n`);

    const mainDefault = this.main.data.locales.fr;
    const secondaryDefault = this.secondary.hasData ? this.secondary.data.locales.fr : {};
    this.locales = {};
    this.locales.fr = { ...mainDefault, ...secondaryDefault };

    if (locale) {
      const mainLocalised = this.main.data.locales[locale] || {};
      const secondaryLocalised = this.secondary.hasData && this.secondary.data.locales[locale] ? this.secondary.data.locales[locale] : {};
      this.locales[locale] = { ...mainLocalised, ...secondaryLocalised };
    }
  }

  get data () {
    return { locales: this.locales };
  }
}

module.exports = { AggregatedI18n };
