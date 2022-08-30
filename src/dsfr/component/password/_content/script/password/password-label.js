import ref from '../../../ref.js';
import { PasswordEmission } from './password-emission.js';

class PasswordLabel extends ref.core.Instance {
  static get instanceClassName () {
    return 'PasswordLabel';
  }

  init () {
    this.addDescent(PasswordEmission.ADJUST, this.adjust.bind(this));
  }

  adjust (value) {
    const valueREM = Math.ceil(value / 16);
    this.node.style.paddingRight = valueREM + 'rem';
  }
}

export { PasswordLabel };
