import { Renderer } from './renderer';
import { Initializer } from './initializer';

class Engine {
  constructor () {
    this._isActive = false;
    this._initializer = new Initializer();
    this.register = this._initializer.register;
    this._renderer = new Renderer();
  }

  get isActive () {
    return this._isActive;
  }

  set isActive (value) {
    if (this._isActive === value) return;
    this._isActive = value;
    this._renderer.isRendering = value;
    this._initializer.isActive = value;
  }

  start () {
    this.isActive = true;
  }

  stop () {
    this.isActive = false;
  }
}

const engine = new Engine();

export default engine;
