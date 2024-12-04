import api from '../../api.js';
import { PasswordEmission } from './password-emission.js';

class Password extends api.core.Instance {
  static get instanceClassName () {
    return 'Password';
  }

  init () {
    this.addAscent(PasswordEmission.TOGGLE, this.toggle.bind(this));
    this.addAscent(PasswordEmission.ADJUST, this.adjust.bind(this));
  }

  toggle (value) {
    this.descend(PasswordEmission.TOGGLE, value);
  }

  adjust (value) {
    this.descend(PasswordEmission.ADJUST, value);
  }
}

export { Password };
