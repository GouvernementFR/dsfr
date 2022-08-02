const fs = require('fs');
const log = require('../../../utilities/log');

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
}

module.exports = { I18n };
