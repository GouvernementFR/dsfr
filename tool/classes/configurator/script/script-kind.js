const fs = require('fs');
const { FILENAMES } = require('./filenames');
const { TYPES } = require('./types');
const { ScriptSource } = require('./script-source');

class ScriptKind {
  constructor (kind, part) {
    this.kind = kind;
    this.part = part;
    this.sources = [];
  }

  get has () {
    return this._has;
  }

  init () {
    const dirs = this.kind.paths.map(path => `src${this.part.path}/_content/${path}`).filter(dir => fs.existsSync(dir));

    if (dirs.length === 0) return;

    for (const filename of FILENAMES) {
      this.sources.push(...dirs.map(dir => new ScriptSource(filename, dir)).filter(file => file.has));
    }

    this._has = this.sources.length > 0;

    this.types = TYPES.filter(type => this.sources.some(src => src.filename.types.indexOf(type) > -1));
  }

  getImports (from, filename) {
    const source = this.sources.filter(src => src.filename === filename)[0];
    if (source) return source.getImports(from, filename);
    return [];
  }
}

module.exports = { ScriptKind };
