import { Instance } from '../api/modules/register/instance.js';
import { EquisizedEmission } from './equisized-emission.js';

class Equisized extends Instance {
  static get instanceClassName () {
    return 'Equisized';
  }

  init () {
    this.ascend(EquisizedEmission.CHANGE);
  }

  measure () {
    if (this.isLegacy) this.style.width = 'auto';
    return this.getRect().width;
  }

  adjust (width) {
    if (this.isLegacy) this.style.width = `${width}px`;
  }

  dispose () {
    this.ascend(EquisizedEmission.CHANGE);
  }
}

export { Equisized };
