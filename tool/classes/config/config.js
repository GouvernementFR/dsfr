const fs = require('fs');
const log = require('../../utilities/log');

const flatten = (element) => {
  const flat = [element];
  if (!element.children) return flat;
  for (const child of element.children) flat.push(...flatten(child));
  return flat;
};

const sortByStyle = (a, b) => {
  const aLevel = a.style ? a.style.level || 1000 : 1000;
  const bLevel = b.style ? b.style.level || 1000 : 1000;
  return aLevel - bLevel;
};

const sortByScript = (a, b) => {
  const aLevel = a.script ? a.script.level || 1000 : 1000;
  const bLevel = b.script ? b.script.level || 1000 : 1000;
  return aLevel - bLevel;
};

class Config {
  constructor (data) {
    this._data = data;
    this._flat = flatten(this._data);
    this._sortedByStyle = [...this._flat].sort(sortByStyle);
    this._sortedByScript = [...this._flat].sort(sortByScript);
  }

  get data () {
    return this._data;
  }

  get flat () {
    return this._flat;
  }

  get sortedByStyle () {
    return this._sortedByStyle;
  }

  get sortedByScript () {
    return this._sortedByScript;
  }

  getPackagesByIds (ids) {
    return this._flat.filter(pck => ids && ids.length ? ids.indexOf(pck.id) > -1 : true);
  }

  static async get (path = './') {
    try {
      const file = `${path}.config/config.json`;
      const fileContents = fs.readFileSync(file, 'utf8');
      const data = JSON.parse(fileContents);
      return new Config(data);
    } catch (e) {
      log.error(e);
    }
  }
}

module.exports = { Config };
