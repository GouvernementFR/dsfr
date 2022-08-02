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

  contains (situation, breakpoint = null) {
    for (const source of this._sources) {
      switch (true) {
        case situation === false && breakpoint === null:
        case situation === false && source.breakpoints.includes(breakpoint):
        case situation === source.situation.id && breakpoint === null:
        case situation === source.situation.id && source.breakpoints.includes(breakpoint):
          return true;
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
