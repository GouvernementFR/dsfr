const fs = require('fs');
const { BREAKPOINTS } = require('./breakpoints');

class StyleSource {
  constructor (part, filename, situation) {
    this.part = part;
    this.filename = filename;
    this.situation = situation;
    this.init();
  }

  get has () {
    return this._has === true;
  }

  get breakpoints () {
    return this._breakpoints;
  }

  getUse () {
    return {
      path: this._to,
      module: this._module,
      id: this.part.id
    };
  }

  get module () {
    return {
      id: this._module,
      situation: this.situation.id
    };
  }

  init () {
    this._to = `_content/${this.situation.path}/${this.filename.module}`;
    const file = `src${this.part.path}/_content/${this.situation.path}/${this.filename.name}.scss`;
    this._has = fs.existsSync(file);

    if (!this._has) return;

    const content = fs.readFileSync(file, 'utf8');

    this._breakpoints = BREAKPOINTS.filter(breakpoint => new RegExp(`@mixin ${breakpoint}\\s?\\(`).test(content));

    console.log(this.breakpoints);
    this._module = `${this.part.id}-${this.filename.module}${this.situation.module}`;
  }
}

module.exports = { StyleSource };
