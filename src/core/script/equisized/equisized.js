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
    return this.getRect().width;
  }

  dispose () {
    this.ascend(EquisizedEmission.CHANGE);
  }
}

export { Equisized };
