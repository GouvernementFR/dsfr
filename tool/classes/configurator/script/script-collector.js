const fs = require('fs');
const { FILENAMES } = require('./filenames');
const { SUPPORTS } = require('./supports');
const { ScriptSource } = require('./script-source');
const { SRC } = require('../src');

class ScriptCollector {
  constructor (part, kind) {
    this._kind = kind;
    this.part = part;
    this.init();
  }

  get has () {
    return this._has;
  }

  get kind () {
    return this._kind;
  }

  init () {
    const dirs = this.kind.situations.map(situation => `${SRC}${this.part.path}_content/${situation.path}`).filter(dir => fs.existsSync(dir));

    if (dirs.length === 0) return;

    this._sources = FILENAMES.map(filename => new ScriptSource(filename, dirs)).filter(src => src.has);

    this._has = this._sources.length > 0;

    this.supports = SUPPORTS.filter(support => this._sources.some(src => src.filename.supports.includes(support)));
  }

  isSupporting (support) {
    return this.supports.includes(support);
  }

  getImports (from, filename) {
    const source = this._sources.filter(src => src.filename === filename)[0];
    if (source) return source.getImports(from);
    return [];
  }
}

module.exports = { ScriptCollector };
