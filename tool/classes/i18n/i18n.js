const { I18nPackage } = require('./i18n-package');
const { Config } = require('../config/config');
const { createFile } = require('../../utilities/file');
const fs = require('fs');
const log = require('../../utilities/log');

const getText = (keys, texts) => {
  for (const key of keys) {
    texts = texts[key];
    if (!texts) return null;
  }
  if (texts.default) return texts.default;
  return texts;
};

class I18n {
  constructor (locale = 'fr', path = './') {
    this.locale = locale;
    this.hasFallback = locale !== 'fr';
    this._load(path);
  }

  _load (path) {
    try {
      const file = `${path}.config/i18n.json`;
      const fileContents = fs.readFileSync(file, 'utf8');
      this._data = JSON.parse(fileContents);
    } catch (e) {
      log.error(e);
    }
  }

  getText (key, id = 'global', preventError = false) {
    const text = this._getText(key, id, preventError);
    return text;
  }

  _getText (key, id = 'global', preventError = false) {
    const keys = key.split('.');
    const localised = getText([id, this.locale, ...keys], this._data);
    if (localised) return localised;
    if (this.hasFallback) {
      const fallback = getText([id, 'fr', ...keys], this._data);
      if (fallback) return fallback;
    }
    if (preventError) return null;
    throw new Error(`missing text ${key} in ${id} i18n`);
  }

  hasText (key, id = 'global', withFallback = true) {
    const keys = key.split('.');
    const localised = getText([id, this.locale, ...keys], this._data);
    if (localised) return true;
    if (!withFallback || !this.hasFallback) return false;
    const fallback = getText([id, this.locale, ...keys], this._data);
    if (fallback) return true;
    return false;
  }

  joinTexts (key, id = 'global') {
    const keys = key.split('.');
    const locales = this._data[id];
    const texts = [];
    for (const locale in locales) {
      const text = getText(keys, locales[locale]);
      if (text) texts.push(text);
    }
    return texts.join('');
  }

  static async merge () {
    const i18n = {};
    const global = new I18nPackage('.');
    i18n.global = global.data;

    const config = await Config.get();
    const packages = config.flat;

    for (const pck of packages) {
      const pI18n = new I18nPackage(pck.path);
      if (pI18n.hasData) i18n[pck.id] = pI18n.data;
    }

    createFile('.config/i18n.json', JSON.stringify(i18n, null, 4));
  }
}

module.exports = { I18n };
