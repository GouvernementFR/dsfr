const { SITUATIONS } = require('./situations');
const { StyleSource } = require('./style-source');

class StyleSupport {
  constructor (part, support) {
    this.part = part;
    this.support = support;
    this.id = support.id;
    this.init();
  }

  get has () {
    return this._has === true;
  }

  get uses () {
    return this._sources.map(source => source.use);
  }

  hasBreakpoint (breakpoint, situation) {
    for (const source of this._sources) {
      if (source.breakpoints.includes(breakpoint)) {
        if (situation === false) return true;
        if (source.situation.id === situation) return true;
      }
    }
    return false;
  }

  getSituations (breakpoint) {
    const situations = [];
    for (const situation of SITUATIONS) {
      const modules = [];
      for (const source of this._sources) {
        if (source.situation !== situation) continue;
        if (!source.breakpoints.includes(breakpoint)) continue;
        modules.push(source.module);
      }
      if (modules.length > 0) situations.push({ id: situation.id, modules: modules });
    }
    return situations;
  }

  init () {
    this._sources = [];
    for (const situation of SITUATIONS) {
      const source = new StyleSource(this.part, this.support, situation);
      if (source.has) this._sources.push(source);
    }

    this._has = this._sources.length > 0;
  }
}

module.exports = { StyleSupport };
