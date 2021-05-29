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
    if (value) {
      for (const module of Object.values(this.modules)) {
        module.activate();
      }
    } else {
      for (const module of Object.values(this.modules)) {
        module.deactivate();
      }
    }
  }
}

const state = new State();

export default state;
