const fs = require('fs');
const { SRC } = require('../src');

class ExampleNode {
  constructor (part, relative = '') {
    this.part = part;
    this.relative = relative;
    this.path = `${SRC}${this.part.path}_content/example/${relative}`;
    this._has = false;
    this._children = [];
    this._data = {};
    this.init();
  }

  get has () {
    return this._has || this._children.some(child => child.has);
  }

  init () {
    if (!fs.existsSync(this.path)) return;

    const entries = fs.readdirSync(this.path, { withFileTypes: true });

    for (const entry of entries) {
      switch (true) {
        case entry.isFile() && entry.name === 'index.ejs':
          this._has = true;
          this._data.src = `${this.path}index.ejs`;
          this._data.dest = `example/${this.part.path}${this.relative}index.html`;
          break;

        case entry.isDirectory():
          this.addChild(entry.name);
          break;
      }
    }

    this._data.has = this._has;
    if (this._children.length) this._data.children = this._children.map(child => child.data);
  }

  addChild (name) {
    const child = new ExampleNode(this.part, `${this.relative}${name}/`);
    if (child.has) this._children.push(child);
  }

  get data () {
    return this._data;
  }
}

module.exports = { ExampleNode };
