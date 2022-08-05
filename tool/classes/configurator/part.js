const fs = require('fs');
const yaml = require('js-yaml');
const { I18nPart } = require('./i18n/i18n-part');
const { AssetPart } = require('./asset/asset-part');
const { StylePart } = require('./style/style-part');
const { ScriptPart } = require('./script/script-part');
const { Deprecated } = require('./alt/deprecated');

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

  get flat () {
    const flat = [this];
    this.children.forEach(part => flat.push(...part.flat));
    return flat;
  }

  get data () {
    const data = {
      ...this._data,
      children: this._children.map(child => child.data)
    };
    if (this.asset.has) data.asset = this.asset.data;
    if (this.deprecated.has) data.deprecated = this.deprecated.data;
    return data;
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
    this.i18n = new I18nPart(`src/${this.path}/_content/i18n`);
    this.asset = new AssetPart(`src${this.path}/_content/asset`, this._config.asset);
    // this.style = new StylePart(`src${this.path}/_content/style`, this._config.style);
    this.script = new ScriptPart(this, this._config.script);
    this.deprecated = new Deprecated(this.path, this._config.deprecated);
  }

  extract () {
    const entries = fs.readdirSync(`src/${this.path}`, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory() && entry.name !== '_content') {
        this.addChild(entry.name);
      }
    }

    // console.log(this.id, this._children);
  }

  addChild (path) {
    const child = new Part(`${this.path}/${path}`);
    if (child.has) this._children.push(child);
  }

  analyse () {
    this._children.forEach(child => child.analyse());

    if (this.asset.has) this.asset.analyse();
    if (this.deprecated.has) this.deprecated.analyse();
  }

  generate () {
    this._children.forEach(child => child.generate());
  }
}

module.exports = { Part };
