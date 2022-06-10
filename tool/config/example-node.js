const fs = require('fs');

class ExampleNode {
  constructor (dir, path = '') {
    this.dir = dir;
    this.path = path;
    const entries = fs.readdirSync(`${dir}/${path}`, { withFileTypes: true });
    this._children = [];

    for (const entry of entries) {
      switch (true) {
        case entry.isFile() && entry.name === 'index.ejs':
          this._hasContent = true;
          break;

        case entry.isDirectory():
          this.addChild(entry.name);
          break;
      }
    }
  }

  addChild (name) {
    const child = new ExampleNode(this.dir, `${this.path}/${name}`);
    if (child.hasContent) this._children.push(child);
  }

  get hasContent () {
    return this._hasContent || this._children.some(child => child.hasContent);
  }

  get data () {
    const data = {
      hasContent: this._hasContent === true,
      path: this.path
    };

    if (this._children.length) data.children = this._children.map(child => child.data);

    return data;
  }
}

module.exports = { ExampleNode };
