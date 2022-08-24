const fs = require('fs');
const { AssetItem } = require('./asset-item');

class AssetPart {
  constructor (part, config) {
    this.part = part;
    this._paths = [`src${part.path}/_content/asset`, `src${part.path}/_content/deprecated/asset`];
    this.items = [];
    this._config = config || {};
    this._data = {};
    this.init();
  }

  get has () {
    return this._has === true;
  }

  get filled () {
    return this._data.item || this._data.dependencies;
  }

  get data () {
    return this._data;
  }

  get icons () {
    return this.items.filter(item => item.type === 'icon');
  }

  init () {
    this._paths = this._paths.filter(path => fs.existsSync(path));
    this._has = this._paths.length > 0;
    if (!this._has) return;
    this.dist = this._config.dist || '';
    this.type = this._config.type;
    this.category = this._config.category;
  }

  analyse () {
    if (this._config.dependencies) {
      const dependencies = this._config.dependencies.map(id => this.part.getPart(id)).filter(part => part && part.asset && part.asset.has).map(part => part.id);
      if (dependencies.length > 0) this._data.dependencies = dependencies;
    }

    if (!this.has) return;
    this._paths.forEach(path => this._parse(path));
    if (this.items.length > 0) this._data.items = this.items.map(item => item.data);
  }

  _parse (path, relative = '') {
    const dir = `${path}${relative}`;
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      switch (true) {
        case entry.isFile():
          if (!(/(^|\/)\.[^/.]/g).test(entry.name)) this.items.push(new AssetItem(`${dir}/${entry.name}`, `${this.dist}${relative}/${entry.name}`, this.type, this.category));
          break;

        case entry.isDirectory():
          this._parse(path, `${relative}/${entry.name}`);
          break;
      }
    }
  }

  generate () {

  }
}

module.exports = { AssetPart };
