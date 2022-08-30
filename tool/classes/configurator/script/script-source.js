const fs = require('fs');
const path = require('path');
const { SRC } = require('../src');

class ScriptSource {
  constructor (part, filename, kind) {
    this.part = part;
    this.filename = filename;
    this.kind = kind;
    this._situations = [];
    this.init();
  }

  get has () {
    return this._has === true;
  }

  get situations () {
    return this._situations;
  }

  getImports (from) {
    return this.sources.map(src => path.relative(from, src)).map(src => `${src.charAt(0) !== '.' ? './' : ''}${src}`).map(src => `import '${src}';\n`);
  }

  init () {
    const dirs = [];

    for (const situation of this.kind.situations) {
      const dir = `${SRC}${this.part.path}_content/${situation.path}`;
      if (fs.existsSync(dir)) {
        dirs.push(dir);
        this._situations.push(situation);
      }
    }

    if (dirs.length === 0) return;

    this.sources = dirs.map(dir => `${dir}/${this.filename.name}.js`).filter(file => fs.existsSync(file));
    this._has = this.sources.length > 0;
  }
}

module.exports = { ScriptSource };
