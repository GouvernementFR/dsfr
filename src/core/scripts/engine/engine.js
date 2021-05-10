import { Renderer } from './renderer';
import { Initializer } from './initializer';



class Engine {
  constructor () {
    this._isActive = false;
    this._initializer = new Initializer();
    this._renderer = new Renderer();

  }

  register (selector, factory) {
    if (factories[selector]) return;
    factories[selector] = factory;

    // apply to existent
  }

  get isActive () {
    return this._isActive;
  }

  set isActive (value) {
    if (this._isActive === value) return;
    this._isActive = value;
    this.renderer.isRendering = value;
    if (value) {
      console.log('observe');
      this.observer.observe(document.body, { childList: true, subtree: true });
    } else {
      this.observer.disconnect();
    }
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
