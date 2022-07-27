import api from '../../api.js';
import { PasswordEmission } from './password-emission.js';

class PasswordLabel extends api.core.Instance {
  static get instanceClassName () {
    return 'PasswordLabel';
  }

  init () {
    // this.addDescent(PasswordEmission.ADJUST, this.adjust.bind(this));
    this.addAscent(PasswordEmission.ADJUST, this.descend.bind(this));

    console.log('adjust');
  }

  adjust (value) {
    this.node.style.width = value + 'px';
    console.log('adjust', value);
  }
}

export { PasswordLabel };
