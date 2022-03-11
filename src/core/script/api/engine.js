import { Register } from './modules/register/register.js';
import { Stage } from './modules/stage/stage.js';
import { Renderer } from './modules/render/renderer.js';
import { Resizer } from './modules/resize/resizer.js';
import { ScrollLocker } from './modules/scroll/scroll-locker.js';
import { Load } from './modules/load/load.js';
import { FontSwap } from './modules/font-swap/font-swap';
import { MouseMove } from './modules/mouse-move/mouse-move';
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
    state.create(MouseMove);

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
