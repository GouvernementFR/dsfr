const fs = require('fs');

class ExampleNode {
  constructor (dir, relative = '') {
    this.dir = dir;
    this.relative = relative;
    this.path = relative ? `${dir}/${relative}` : dir;
    this._hasData = false;
    this._children = [];

    if (fs.existsSync(this.path)) this._parse();
  }

  _parse () {
    const entries = fs.readdirSync(this.path, { withFileTypes: true });

    for (const entry of entries) {
      switch (true) {
        case entry.isFile() && entry.name === 'index.ejs':
          this._hasData = true;
          break;

        case entry.isDirectory():
          this.addChild(entry.name);
          break;
      }
    }
  }

  addChild (name) {
    const child = new ExampleNode(this.dir, `${this.relative}${name}`);
    if (child.hasData) this._children.push(child);
  }

  get hasData () {
    return this._hasData || this._children.some(child => child.hasData);
  }

  get data () {
    const data = {
      hasData: this._hasData === true,
      src: `${this.path}/index.ejs`,
      dest: `${this.path.replace('/example', '').replace('src', 'example')}/index.html`,
      subdir: this._children.map(child => child.relative)
    };

    if (this._children.length) data.children = this._children.map(child => child.data);

    return data;
  }
}

module.exports = { ExampleNode };
