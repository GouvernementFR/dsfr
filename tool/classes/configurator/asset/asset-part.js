const fs = require('fs');
const { AssetItem } = require('./asset-item');

class AssetPart {
  constructor (path, config) {
    this.path = path;
    this.items = [];
    this._config = config;
    this.init();
  }

  get has () {
    return this._has === true;
  }

  get data () {
    return {
      items: this.items.map(item => item.data)
    };
  }

  get icons () {
    return this.items.filter(item => item.type === 'icon');
  }

  init () {
    if (!fs.existsSync(this.path)) return;
    this._has = true;
    this.dist = this._config.dist || '';
    this.type = this._config.type;
    this.category = this._config.category;
  }

  analyse () {
    if (!this.has) return;
    this._parse();
  }

  _parse (relative = '') {
    const dir = `${this.path}${relative}`;
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      switch (true) {
        case entry.isFile():
          if (!(/(^|\/)\.[^/.]/g).test(entry.name)) this.items.push(new AssetItem(`${dir}/${entry.name}`, `${this.dist}${relative}/${entry.name}`, this.type, this.category));
          break;

        case entry.isDirectory():
          this._parse(`${relative}/${entry.name}`);
          break;
      }
    }
  }

  generate () {

  }
}

module.exports = { AssetPart };
