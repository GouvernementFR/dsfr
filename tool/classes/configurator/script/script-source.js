const fs = require('fs');
const path = require('path');

class ScriptSource {
  constructor (filename, dirs) {
    this.filename = filename;
    this.dirs = dirs;
    this.init();
  }

  get has () {
    return this._has === true;
  }

  getImports (from) {
    return this.sources.map(src => path.relative(from, src)).map(src => `${src.charAt(0) !== '.' ? './' : ''}${src}`).map(src => `import '${src}';\n`);
  }

  init () {
    this.sources = this.dirs.map(dir => `${dir}/${this.filename.name}.js`).filter(file => fs.existsSync(file));
    this._has = this.sources.length > 0;
  }
}

module.exports = { ScriptSource };
