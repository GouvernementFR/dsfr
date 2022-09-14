const fs = require('fs');
const { createFile, deleteFile } = require('../../../utilities/file');
const { SUPPORTS } = require('./supports');
const { SITUATIONS } = require('./situations');
const { SRC } = require('../src');

class StyleItem {
  constructor (part, kind) {
    this.part = part;
    this.kind = kind;
    this.imports = [];
    this._filled = false;
    this._data = {
      src: `${SRC}${part.path}${kind.src}.scss`,
      dest: `dist/${part.path}${part.filename}${kind.dest}.css`
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

  analyse () {
    let bits = 0;
    for (let i = 0; i < SUPPORTS.length; i++) {
      for (let j = 0; j < SITUATIONS.length; j++) {
        bits |= this.kind.supports.includes(SUPPORTS[i]) && this.kind.situations.includes(SITUATIONS[j]) ? 1 << (i * SITUATIONS.length + j) : 0;
      }
    }

    this._bits = this.part.style.collector.bits & bits;
    this._filled = this._bits > 0;
  }

  produce () {
    const folder = `${SRC}${this.part.path}`.split('/').splice(-2, 1)[0];
    const content = [`@use '../${folder}';\n\n`];

    const situations = this.kind.situations.map(situation => situation.id).join(' ');
    for (const support of this.kind.supports) {
      if (this.kind.situations.some(situation => this.part.style.collector.contains(support.id, situation.id))) content.push(`@include ${this.part.id}.${support.id}(${situations});\n`);
    }

    createFile(this.src, this.part.banner(content.join('')));
  }

  remove () {
    if (fs.existsSync(this.src)) deleteFile(this.src);
    this._filled = false;
  }
}

module.exports = { StyleItem };
