import { Instance } from '../api/register/instance.js';
import { EquisizedEmission } from './equisized-emission.js';

class Equisized extends Instance {
  static get instanceClassName () {
    return 'Equisized';
  }

  init () {
    this.ascend(EquisizedEmission.CHANGE);
  }

  measure () {
    this.style.width = 'auto';
    return this.getRect().width;
  }

  adjust (width) {
    this.style.width = `${width}px`;
  }

  dispose () {
    this.ascend(EquisizedEmission.CHANGE);
  }
}

export { Equisized };
