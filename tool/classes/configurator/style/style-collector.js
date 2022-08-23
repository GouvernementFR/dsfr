const path = require('path');
const { SUPPORTS } = require('./supports');
const { StyleSupport } = require('./style-support');
const { BREAKPOINTS } = require('./breakpoints');

class StyleCollector {
  constructor (part) {
    this.part = part;
    this._contains = {};
    this.init();
  }

  get has () {
    return this._has === true;
  }

  getUse (from) {
    return {
      path: path.relative(from, `src/${this.part.path}`),
      module: this.part.id
    };
  }

  contains (support, breakpoint, situation) {
    if (this._containing(support, breakpoint, situation)) return true;

    if (this.part.children.some(child => child.style.has && child.style.collector.contains(support, breakpoint, situation))) return true;

    return false;
  }

  _containing (support, breakpoint, situation) {
    for (const supportStyle of this._supports) {
      if (supportStyle.id === support) {
        return supportStyle.hasBreakpoint(breakpoint, situation);
      }
    }
    return false;
  }

  getModule (dependency) {
    const uses = [];

    for (const part of dependency.imports) {
      uses.push(part.style.collector.getUse(`src/${this.part.path}`));
    }

    const mixins = SUPPORTS.map(support => {
      return {
        name: support.id,
        breakpoints: BREAKPOINTS.map(breakpoint => {
          return {
            id: breakpoint,
            modules: dependency.imports.filter(part => part.style.collector.contains(support.id, breakpoint, false)).map(part => part.id)
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

  init () {
    this._supports = [];

    for (const SUPPORT of SUPPORTS) {
      const support = new StyleSupport(this.part, SUPPORT);
      if (support.has) this._supports.push(support);
    }

    this._has = this._supports.length > 0;

    if (!this._has) return;
  }
}

module.exports = { StyleCollector };
