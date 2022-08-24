const fs = require('fs');
const { createFile, deleteFile } = require('../../../utilities/file');

class StyleItem {
  constructor (part, kind) {
    this.part = part;
    this.kind = kind;
    this.imports = [];
    this._filled = false;
    this._data = {
      src: `src${part.path}/${kind.src}.scss`,
      dest: `dist${part.path}/${part.filename}${kind.dest}.css`
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

  produce () {
    this.content = `@use '../${this.part.id}';\n\n`;

    const situations = this.kind.situations.map(situation => situation.id).join(' ');
    this.content += this.kind.supports.map(support => `@include ${this.part.id}.${support.id}(${situations});\n`).join('');
  }

  create () {
    createFile(this.src, this.part.banner(this.content));
  }
}

module.exports = { StyleItem };
