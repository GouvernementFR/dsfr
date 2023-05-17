const fs = require('fs');

class ExampleNode {
  constructor (dir, relative = '', isStandalone, config = 'tool/example/config.ejs') {
    // console.log(dir, config);
    this.dir = dir;
    this.relative = relative;
    this.isStandalone = isStandalone;
    this.path = `${dir}${relative}/`;
    this._hasData = false;
    this._children = [];
    this._config = config;

    if (fs.existsSync(this.path)) this._parse();
  }

  _parse () {
    const config = `${this.path}config.ejs`;
    if (fs.existsSync(config)) this._config = config;

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
    const child = new ExampleNode(this.path, name, false, this._config);
    if (child.hasData) this._children.push(child);
  }

  get hasData () {
    return this._hasData || this._children.some(child => child.hasData);
  }

  get _dest () {
    const replace = this.isStandalone ? 'standalone' : 'example';
    const remove = this.isStandalone ? '/standalone/example' : '/example';
    return `${this.path.replace(remove, '').replace('src', replace)}index.html`;
  }

  get data () {
    const data = {
      hasData: this._hasData === true,
      src: `${this.path}index.ejs`,
      dest: this._dest,
      subdir: this._children.map(child => child.relative),
      config: this._config
    };

    if (this._children.length) data.children = this._children.map(child => child.data);

    return data;
  }
}

module.exports = { ExampleNode };
