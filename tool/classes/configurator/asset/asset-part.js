const fs = require('fs');
const { AssetItem } = require('./asset-item');

class AssetPart {
  constructor (path, config) {
    this.path = `src${path}/_content/asset`;
    this.items = [];
    this.init(config);
  }

  get has () {
    return this._has === true;
  }

  get data () {
    const data = {};
    return {};
  }

  get sass () {

  }

  init (config) {
    if (!fs.existsSync(this.path)) return;
    this._has = true;
    this.dist = config.dist;
    this.type = config.type;
    this.category = config.category;
  }

  analyse () {
    this._parse();
  }

  _parse (relative = '') {
    console.log('parse');
    const dir = `${this.path}${relative}`;
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      switch (true) {
        case entry.isFile():
          this.items.push(new AssetItem(`${dir}/${entry.name}`, `${this.dist}${relative}/${entry.name}`, this.type, this.category));
          break;

        case entry.isDirectory():
          this._parse(`${relative}/${entry.name}`);
          break;
      }
    }

    console.log(this.items);
  }

  generate () {

  }
}

module.exports = { AssetPart };
