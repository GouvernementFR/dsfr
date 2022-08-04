const fs = require('fs');
const yaml = require('js-yaml');
const { AssetPart } = require('./asset/asset-part');

class Part {
  constructor (path) {
    this.path = path;
    this._children = [];
    this.init();
  }

  get has () {
    return this._has === true;
  }

  get children () {
    return this._children;
  }

  get data () {
    return {
      ...this._data,
      children: this._children.map(child => child.data)
    };
  }

  init () {
    const path = `src/${this.path}/_content/config.yml`;
    if (!fs.existsSync(path)) return;
    this._has = true;
    const fileContents = fs.readFileSync(path, 'utf8');
    this._config = yaml.load(fileContents);
    this.id = this._config.id;
    this._data = {
      id: this._config.id,
      draft: this._config.draft === true,
      detached: this._config.detached === true
    };
    this.extract();
    // this.i18n = new I18
    const asset = new AssetPart(this.path, this._config.asset);
    if (asset.has) this.asset = asset;
  }

  extract () {
    const entries = fs.readdirSync(`src/${this.path}`, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory() && entry.name !== '_content') {
        this.addChild(entry.name);
      }
    }

    console.log(this.id, this._children);
  }

  addChild (path) {
    const child = new Part(`${this.path}/${path}`);
    if (child.has) this._children.push(child);
  }

  analyse () {
    this._children.forEach(child => child.analyse());

    if (this.asset) this.asset.analyse();
  }

  generate () {
    this._children.forEach(child => child.generate());
  }
}

module.exports = { Part };
