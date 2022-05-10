import { Instance } from '../api/modules/register/instance.js';
import api from '../../api.js';

class Ratio extends Instance {
  static get instanceClassName () {
    return 'Ratio';
  }

  init () {
    if (!api.internals.support.supportLocalStorage()) {
      this.update();
    }
  }
}

export { Ratio };
