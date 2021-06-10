import { Register } from './register/register.js';
import { Stage } from './stage/stage.js';
import { Renderer } from './render/renderer.js';
import { Resizer } from './resize/resizer.js';
import { ScrollLocker } from './scroll/scroll-locker.js';
import { Starter } from './starter.js';
import { version } from '../../config.js';
import inspector from '../inspect/inspector';
import state from './state';

class Engine {
  constructor () {
    inspector.info(`version ${version}`);
    state.create(Register);
    state.create(Stage);
    state.create(Renderer);
    state.create(Resizer);
    state.create(ScrollLocker);

    const registerModule = state.getModule('register');
    this.register = registerModule.register.bind(registerModule);
    this.starter = new Starter(this.start.bind(this));
  }

  configure (configuration) {
    if (configuration.verbose === true) inspector.level = 0;
    this.starter.setMode(configuration.startMode || 'auto');
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
