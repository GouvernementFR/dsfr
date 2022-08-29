const fs = require('fs');
const log = require('../../utilities/log');

const flatten = (element) => {
  const flat = [element];
  if (!element.children) return flat;
  for (const child of element.children) flat.push(...flatten(child));
  return flat;
};

class Configuration {
  constructor (path = '') {
    this.load(path);
    this.init();
  }

  load (path) {
    try {
      const file = `${path}.config/config.json`;
      const fileContents = fs.readFileSync(file, 'utf8');
      this._data = JSON.parse(fileContents);
    } catch (e) {
      log.error(e);
    }
  }

  get has () {
    return this._data !== undefined;
  }

  init () {
    if (!this.has) return;
    this._flat = flatten(this._data.data);
  }

  get data () {
    return this._data;
  }

  get flat () {
    return this._flat;
  }

  getPartsByIds (ids) {
    return ids ? this._flat.filter(pck => ids && ids.length ? ids.indexOf(pck.id) > -1 : true) : this._flat;
  }

  static async get (path = '') {

  }
}

module.exports = { Configuration };
