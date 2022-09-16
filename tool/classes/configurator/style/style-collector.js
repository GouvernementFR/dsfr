const path = require('path');
const { SUPPORTS } = require('./supports');
const { SITUATIONS } = require('./situations');
const { StyleSupport } = require('./style-support');
const { BREAKPOINTS } = require('./breakpoints');
const { SRC } = require('../src');

class StyleCollector {
  constructor (part) {
    this.part = part;
    this._contains = {};
    this._bits = 0;
    this.init();
  }

  get has () {
    return this._has === true;
  }

  get bits () {
    return this._bits;
  }

  getUse (from) {
    return {
      path: path.relative(from, `${SRC}${this.part.path}`),
      module: this.part.style.module
    };
  }

  contains (support, situation, breakpoint) {
    if (this._containing(support, situation, breakpoint)) return true;

    return this.part.children.some(child => child.style.has && child.style.collector.contains(support, situation, breakpoint));
  }

  _containing (support, situation, breakpoint = null) {
    for (const supportStyle of this._supports) {
      if (supportStyle.id === support) {
        return supportStyle.contains(situation, breakpoint);
      }
    }
    return false;
  }

  init () {
    this._supports = [];

    for (const SUPPORT of SUPPORTS) {
      const support = new StyleSupport(this.part, SUPPORT);
      if (support.has) this._supports.push(support);
    }

    for (let i = 0; i < SUPPORTS.length; i++) {
      for (let j = 0; j < SITUATIONS.length; j++) {
        this._bits |= this.contains(SUPPORTS[i].id, SITUATIONS[j].id) ? 1 << (i * SITUATIONS.length + j) : 0;
      }
    }

    this._has = this._supports.length > 0;
  }

  getModule (dependency) {
    const uses = [];

    for (const part of dependency.imports) {
      uses.push(part.style.collector.getUse(`${SRC}${this.part.path}`));
    }

    const mixins = SUPPORTS.map(support => {
      return {
        name: support.id,
        breakpoints: BREAKPOINTS.map(breakpoint => {
          return {
            id: breakpoint,
            modules: dependency.imports.filter(part => part.style.collector.contains(support.id, false, breakpoint)).map(part => part.style.module)
          };
        })
      };
    });

    for (const support of this._supports) {
      uses.push(...support.uses);

      for (const mixin of mixins) {
        if (mixin.name === support.id) {
          for (const breakpoint of mixin.breakpoints) {
            const situations = support.getSituations(breakpoint.id);
            if (situations.length > 0) breakpoint.situations = situations;
          }
        }
      }
    }

    mixins.forEach(mixin => {
      mixin.breakpoints = mixin.breakpoints.filter(breakpoint => breakpoint.situations || breakpoint.modules.length > 0);
    });

    return {
      top: this.part.top,
      uses: uses,
      mixins: mixins.filter(mixin => mixin.breakpoints.length > 0)
    };
  }
}

module.exports = { StyleCollector };
