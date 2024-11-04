class State {
  constructor () {
    this.modules = {};
  }

  create (ModuleClass) {
    const module = new ModuleClass();
    this.modules[module.type] = module;
  }

  getModule (type) {
    return this.modules[type];
  }

  add (type, item) {
    this.modules[type].add(item);
  }

  remove (type, item) {
    this.modules[type].remove(item);
  }

  get isActive () {
    return this._isActive;
  }

  set isActive (value) {
    if (value === this._isActive) return;
    this._isActive = value;
    const values = Object.keys(this.modules).map((e) => {
      return this.modules[e];
    });
    if (value) {
      for (const module of values) {
        module.activate();
      }
    } else {
      for (const module of values) {
        module.deactivate();
      }
    }
  }

  get isLegacy () {
    return this._isLegacy;
  }

  set isLegacy (value) {
    if (value === this._isLegacy) return;
    this._isLegacy = value;
  }
}

const state = new State();

export default state;
