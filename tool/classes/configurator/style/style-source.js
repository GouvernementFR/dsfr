const fs = require('fs');
const { BREAKPOINTS } = require('./breakpoints');
const { SRC } = require('../src');

class StyleSource {
  constructor (part, support, situation) {
    this.part = part;
    this.support = support;
    this.situation = situation;
    this._module = {
      isLocal: true,
      id: part.id,
      name: `${this.part.id}${this.support.module}${this.situation.module}`,
      options: `$options-${part.id}`
    };
    this.init();
  }

  get has () {
    return this._has === true;
  }

  get breakpoints () {
    return this._breakpoints;
  }

  get use () {
    return this._use;
  }

  get module () {
    return this._module;
  }

  init () {
    const file = `${SRC}${this.part.path}_content/${this.situation.path}/_${this.support.filename}.scss`;
    this._has = fs.existsSync(file);

    if (!this._has) return;

    const content = fs.readFileSync(file, 'utf8');

    this._breakpoints = BREAKPOINTS.filter(breakpoint => new RegExp(`@mixin ${breakpoint}\\s?\\(`).test(content));

    this._has &&= this._breakpoints.length > 0;

    this._use = {
      path: `_content/${this.situation.path}${this.support.filename}`,
      module: this._module,
      id: this.part.id
    };
  }
}

module.exports = { StyleSource };
