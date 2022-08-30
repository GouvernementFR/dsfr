const fs = require('fs');
const { FILENAMES } = require('./filenames');
const { SITUATIONS } = require('./situations');
const { createFile, deleteFile } = require('../../../utilities/file');
const { SRC } = require('../src');

class ScriptItem {
  constructor (part, kind, support) {
    this.part = part;
    this.kind = kind;
    this.support = support;
    this._situations = [];
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

  get bits () {
    return this._bits;
  }

  produce (dependency) {
    const from = `${SRC}${this.part.path}`;
    for (const filename of FILENAMES) {
      if (!filename.supports.includes(this.support)) continue;
      for (const part of dependency.imports) {
        const collector = part.script.getCollector(this.kind);
        if (!collector || !collector.isSupporting(this.support)) continue;
        this._situations.push(...collector.situations.filter(situation => !this._situations.includes(situation)));
        this.imports.push(...collector.getImports(from, filename));
      }
    }
    this._filled = this.imports.length > 0;

    if (this._filled) this._bits = this._situations.reduce((sum, situation) => sum + (1 << SITUATIONS.indexOf(situation)), 0);
  }

  create () {
    createFile(this.src, this.part.banner(this.imports.join('')));
  }

  remove () {
    if (fs.existsSync(this.src)) deleteFile(this.src);
  }
}

module.exports = { ScriptItem };
