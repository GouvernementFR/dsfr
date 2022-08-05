const fs = require('fs');
const { AssetPart } = require('../asset/asset-part');

class Deprecated {
  constructor (path, config) {
    this.path = path;
    this._config = config || {};
    this.init();
  }

  get has () {
    return this._has === true;
  }

  get data () {
    const data = {};
    if (this.asset.has) data.asset = this.asset.data;
    return data;
  }

  init () {
    const path = `src/${this.path}/_content/deprecated`;
    if (!fs.existsSync(path)) return;
    this._has = true;
    this.asset = new AssetPart(`src${this.path}/_content/deprecated/asset`, this._config.asset);
  }

  analyse () {
    this.asset.analyse();
  }
}

module.exports = { Deprecated };
