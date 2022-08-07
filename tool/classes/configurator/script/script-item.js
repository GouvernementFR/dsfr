const { FILENAMES } = require('./filenames');
const { createFile } = require('../../../utilities/file');

class ScriptItem {
  constructor (part, kind, support) {
    this.part = part;
    this.kind = kind;
    this.support = support;
    this.imports = [];
    this._filled = false;
    this._data = {
      src: `src${part.path}/${support.filename}${kind.src}.js`,
      dest: `dist${part.path}/${part.filename}.${support.filename}${kind.dest}.js`,
      support: support.id
    };
  }

  get data () {
    return this._data;
  }

  get src () {
    return this._data.src;
  }

  get filled () {
    return this._filled;
  }

  produce (dependency) {
    const from = `src${this.part.path}`;
    for (const filename of FILENAMES) {
      if (!filename.supports.includes(this.support)) continue;
      for (const part of dependency.imports) {
        const kind = part.script.getKind(this.kind);
        if (!kind || !kind.isSupporting(this.support)) continue;
        this.imports.push(...kind.getImports(from, filename));
      }
    }
    this._filled = this.imports.length > 0;
  }

  create () {
    createFile(this.src, this.part.banner(this.imports.join('')));
  }
}

module.exports = { ScriptItem };
