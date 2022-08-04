const fs = require('fs');

class ScriptPart {
  constructor (path, config) {
    this.path = path;
    this.init(config);
  }

  get has () {
    return this._has === true;
  }

  get data () {
    return {};
  }

  init (config) {
    const path = `src/${this.path}/_content/asset`;
    if (!fs.existsSync(path)) return;
    this._has = true;
  }

  analyse () {

  }

  generate () {

  }
}

module.exports = { ScriptPart };
