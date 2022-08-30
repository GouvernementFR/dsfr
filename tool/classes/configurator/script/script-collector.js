const { FILENAMES } = require('./filenames');
const { SUPPORTS } = require('./supports');
const { SITUATIONS } = require('./situations');
const { ScriptSource } = require('./script-source');

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

  get situations () {
    return this._situations;
  }

  init () {
    this._sources = FILENAMES.map(filename => new ScriptSource(this.part, filename, this.kind)).filter(src => src.has);

    this._has = this._sources.length > 0;

    this._situations = SITUATIONS.filter(situation => this._sources.some(src => src.situations.includes(situation)));

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
