const fs = require('fs');

class StylePart {
  constructor (path, config) {
    this.path = path;
    this._config = config || {};
    this.init();
  }

  get has () {
    return this._has === true;
  }

  get data () {
    return {};
  }

  init () {
    if (!fs.existsSync(this.path)) return;
    this._has = true;
  }

  analyse () {

  }

  generate () {

  }
}

module.exports = { StylePart };
