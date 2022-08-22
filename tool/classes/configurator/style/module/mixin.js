const { BREAKPOINTS } = require('../breakpoints');
const { Breakpoint } = require('./breakpoint');

class Mixin {
  constructor (part, filename) {
    this.part = part;
    this._filename = filename;
    this._sources = [];
    this._breakpoints = BREAKPOINTS.map(id => new Breakpoint(id));
  }

  addSource (source) {
    if (source.filename !== this._filename) return;
    this._sources.push(source);
    this._breakpoints.forEach(breakpoint => breakpoint.addSource(source));
  }

  has () {
    return this._sources.length > 0;
  }

  filter () {
    this._breakpoints = this._breakpoints.filter(breakpoint => breakpoint.has);
  }

  get uses () {
    return this._sources.map(source => source.getUse());
  }

  get data () {
    return {
      name: this._filename.module,
      breakpoints: this._breakpoints.map(breakpoint => breakpoint.data)
    };
  }
}

module.exports = { Mixin };
