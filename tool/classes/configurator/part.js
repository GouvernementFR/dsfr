const fs = require('fs');
const yaml = require('js-yaml');
const { I18nPart } = require('./i18n/i18n-part');
const { AssetPart } = require('./asset/asset-part');
const { StylePart } = require('./style/style-part');
const { ScriptPart } = require('./script/script-part');
const global = require('../../../package.json');
const { ExamplePart } = require('./example/example-part');
const { SRC } = require('./src');

class Part {
  constructor (path, depth = 0, ascendants = null) {
    this.path = path;
    this._depth = depth;
    this._parent = ascendants ? ascendants[0] : null;
    this._ascendants = ascendants || [];
    this.top = '../'.repeat(depth + 1);
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

  get depth () {
    return this._depth;
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
    const data = { ...this._data };
    if (this.asset.filled) data.asset = this.asset.data;
    if (this.style.has) data.style = this.style.data;
    if (this.script.has) data.script = this.script.data;
    if (this.example.has) data.example = this.example.data;
    data.children = this._children.map(child => child.data);
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
    const path = `${SRC}${this.path}_content/config.yml`;
    if (!fs.existsSync(path)) return;
    const fileContents = fs.readFileSync(path, 'utf8');
    this._config = yaml.load(fileContents);
    if (this._config.ignore === true) return;
    this._has = true;
    this._filename = this._config.filename || this._config.id;
    this._data = {
      id: this._config.id,
      src: `${SRC}${this.path}`,
      detached: this._config.detached === true
    };
    this.extract();
    this.i18n = new I18nPart(this);
    this.asset = new AssetPart(this, this._config.asset);
    this.style = new StylePart(this, this._config.style);
    this.script = new ScriptPart(this, this._config.script);
    this.example = new ExamplePart(this, this._config.example);
  }

  extract () {
    const entries = fs.readdirSync(`${SRC}${this.path}`, { withFileTypes: true });

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
    const child = new Part(`${this.path}${path}/`, this.depth + 1, [this, ...this._ascendants]);
    if (child.has) this._children.push(child);
  }

  analyse () {
    this._children.forEach(child => child.analyse());

    this.asset.analyse();
    this.style.analyse();
    this.script.analyse();
  }

  order () {
    this._children.forEach(child => child.order());

    this.style.order();
    this.script.order();
  }

  generate () {
    this._children.forEach(child => child.generate());

    this.style.generate();
    this.script.generate();
  }

  banner (content) {
    return `/*! ${global.config.namespace.toUpperCase()} v${global.version} | SPDX-License-Identifier: MIT | License-Filename: LICENSE.md | restricted use (see terms and conditions) */\n\n/* ${this.id.toUpperCase()} */\n\n${content}`;
  }
}

module.exports = { Part };
