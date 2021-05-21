import { Observer } from './element/observer.js';
import { Renderer } from './modules/render/renderer.js';
import { Resizer } from './modules/resize/resizer.js';
import { ScrollLocker } from './modules/scroll/scroll-locker.js';
import { Starter } from './modules/starter.js';
import { version } from '../../config.js';
import inspector from '../inspect/inspector';
import state from './state';

class Engine {
  constructor () {
    inspector.info(`version ${version}`);
    this._observer = new Observer();
    this._renderer = new Renderer();
    this._resizer = new Resizer();
    this._locker = new ScrollLocker();

    this._starter = new Starter(this.start.bind(this));
  }

  get isActive () {
    return state.isActive;
  }

  set isActive (value) {
    state.isActive = value;
  }

  start () {
    inspector.debug('START');
    this.isActive = true;
  }

  stop () {
    inspector.debug('STOP');
    this.isActive = false;
  }
}

const engine = new Engine();

export default engine;
