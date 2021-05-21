import { Collection } from '../global/collection';

class State {
  constructor () {
    this.elements = new Collection();
    this.registrations = new Collection();
    this.resizables = new Collection();
    this.renderables = new Collection();
    this.scrollLockers = new Collection();
    this.activations = new Collection();
    this.deactivations = new Collection();
  }

  get isActive () {
    return this._isActive;
  }

  set isActive (value) {
    if (value === this._isActive) return;
    this._isActive = value;
    if (value) {
      this.activations.execute();
    } else this.deactivations.execute();
  }
}

const state = new State();

export default state;
