const fs = require('fs');
const yaml = require('js-yaml');
const { I18nPart } = require('./i18n/i18n-part');
const { AssetPart } = require('./asset/asset-part');
const { StylePart } = require('./style/style-part');
const { ScriptPart } = require('./script/script-part');
const { Deprecated } = require('./alt/deprecated');
const global = require('../../../package.json');

class Part {
  constructor (path, level = 0, ascendants = null) {
    this.path = path;
    this._level = level;
    this._parent = ascendants ? ascendants[0] : null;
    this._ascendants = ascendants || [];
    this.top = '../'.repeat(level + 1);
    this._children = [];
    this.init();
  }

  get has () {
    return this._has === true;
  }

  get id () {
    return this._data.id;
  }

  get filename () {
    return this._filename;
  }

  get children () {
    return this._children;
  }

  get descendants () {
    return this._descendants;
  }

  get ascendants () {
    return this._ascendants;
  }

  get parent () {
    return this._parent;
  }

  get root () {
    return this._parent ? this._parent.root : this;
  }

  get level () {
    return this._level;
  }

  get detached () {
    return this._data.detached === true;
  }

  get draft () {
    return this._data.draft === true;
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
    if (this.script.has) data.script = this.script.data;
    if (this.deprecated.has) data.deprecated = this.deprecated.data;
    return data;
  }

  getPart (id) {
    return this.root._getPart(id);
  }

  _getPart (id) {
    if (this.id === id) return this;
    for (const child of this._children) {
      const part = child._getPart(id);
      if (part) return part;
    }
    return null;
  }

  init () {
    const path = `src/${this.path}/_content/config.yml`;
    if (!fs.existsSync(path)) return;
    const fileContents = fs.readFileSync(path, 'utf8');
    this._config = yaml.load(fileContents);
    if (this._config.ignore === true) return;
    this._has = true;
    this._filename = this._config.filename || this._config.id;
    this._data = {
      id: this._config.id,
      src: `src${this.path}`,
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

    this._descendants = [];
    for (const child of this.children) {
      this._descendants.push(child, ...child._descendants);
    }
  }

  addChild (path) {
    const child = new Part(`${this.path}/${path}`, this.level + 1, [this, ...this._ascendants]);
    if (child.has) this._children.push(child);
  }

  analyse () {
    this._children.forEach(child => child.analyse());

    this.asset.analyse();
    this.script.analyse();
    this.deprecated.analyse();
  }

  order () {
    this._children.forEach(child => child.order());

    this.script.order();
  }

  generate () {
    this._children.forEach(child => child.generate());

    this.script.generate();
  }

  banner (content) {
    return `/*! ${global.config.namespace.toUpperCase()} v${global.version} | SPDX-License-Identifier: MIT | License-Filename: LICENSE.md | restricted use (see terms and conditions) */\n\n/* ${this.id.toUpperCase()} */\n\n${content}`;
  }
}

module.exports = { Part };