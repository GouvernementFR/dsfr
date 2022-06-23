const fs = require('fs');

class ExampleNode {
  constructor (dir, relative = '') {
    this.dir = dir;
    this.relative = relative;
    this.path = relative ? `${dir}/${relative}` : dir;
    this._hasContent = false;
    this._children = [];

    if (fs.existsSync(this.path)) this._parse();
  }

  _parse () {
    const entries = fs.readdirSync(this.path, { withFileTypes: true });

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
    const child = new ExampleNode(this.dir, `${this.relative}${name}`);
    if (child.hasContent) this._children.push(child);
  }

  get hasContent () {
    return this._hasContent || this._children.some(child => child.hasContent);
  }

  get data () {
    const data = {
      hasContent: this._hasContent === true,
      src: `${this.path}/index.ejs`,
      dest: `${this.path.replace('/example', '').replace('src', 'example')}/index.html`,
      subdir: this._children.map(child => child.relative)
    };

    if (this._children.length) data.children = this._children.map(child => child.data);

    return data;
  }
}

module.exports = { ExampleNode };
