const fs = require('fs');
const { FILENAMES } = require('./filenames');
const { createFile, deleteFile } = require('../../../utilities/file');
const { SRC } = require('../src');

class ScriptItem {
  constructor (part, kind, support) {
    this.part = part;
    this.kind = kind;
    this.support = support;
    this.imports = [];
    this._filled = false;
    this._data = {
      src: `${SRC}${part.path}${support.filename}${kind.src}.js`,
      dest: `dist/${part.path}${part.filename}.${support.filename}${kind.dest}.js`,
      support: support.id,
      format: support.format
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
    const from = `${SRC}${this.part.path}`;
    for (const filename of FILENAMES) {
      if (!filename.supports.includes(this.support)) continue;
      for (const part of dependency.imports) {
        const collector = part.script.getCollector(this.kind);
        if (!collector || !collector.isSupporting(this.support)) continue;
        this.imports.push(...collector.getImports(from, filename));
      }
    }
    this._filled = this.imports.length > 0;

    if (!this._filled && fs.existsSync(this.src)) deleteFile(this.src);
  }

  create () {
    createFile(this.src, this.part.banner(this.imports.join('')));
  }
}

module.exports = { ScriptItem };
