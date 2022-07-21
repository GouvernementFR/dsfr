const fs = require('fs');

class ExampleNode {
  constructor (dir, relative = '', isStandalone) {
    this.dir = dir;
    this.relative = relative;
    this.isStandalone = isStandalone;
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

  get _dest () {
    const replace = this.isStandalone ? 'standalone' : 'example';
    const remove = this.isStandalone ? '/standalone/example' : '/example';
    return `${this.path.replace(remove, '').replace('src', replace)}/index.html`;
  }

  get data () {
    const data = {
      hasData: this._hasData === true,
      src: `${this.path}/index.ejs`,
      dest: this._dest,
      subdir: this._children.map(child => child.relative)
    };

    if (this._children.length) data.children = this._children.map(child => child.data);

    return data;
  }
}

module.exports = { ExampleNode };
