import { Register } from './register/register.js';
import { Stage } from './stage/stage.js';
import { Renderer } from './render/renderer.js';
import { Resizer } from './resize/resizer.js';
import { ScrollLocker } from './scroll/scroll-locker.js';
import { Load } from './load/load.js';
import { FontSwap } from './font-swap/font-swap';
import inspector from './inspect/inspector.js';
import state from './state.js';

class Engine {
  constructor () {
    state.create(Register);
    state.create(Stage);
    state.create(Renderer);
    state.create(Resizer);
    state.create(ScrollLocker);
    state.create(Load);
    state.create(FontSwap);

    const registerModule = state.getModule('register');
    this.register = registerModule.register.bind(registerModule);
  }

  get isActive () {
    return state.isActive;
  }

  start () {
    inspector.debug('START');
    state.isActive = true;
  }

  stop () {
    inspector.debug('STOP');
    state.isActive = false;
  }
}

const engine = new Engine();
export default engine;
