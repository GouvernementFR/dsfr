import api from '../../api.js';
import { PasswordEmission } from './password-emission.js';

class PasswordToggle extends api.core.Instance {
  static get instanceClassName () {
    return 'PasswordToggle';
  }

  init () {
    this.listenClick();
    this.ascend(PasswordEmission.ADJUST, this.width);
    this.isSwappingFont = true;
    this._isChecked = this.isChecked;
  }

  get width () {
    const style = getComputedStyle(this.node.parentNode);
    return parseInt(style.width);
  }

  get isChecked () {
    return this.node.checked;
  }

  set isChecked (value) {
    this._isChecked = value;
    this.ascend(PasswordEmission.TOGGLE, value);
  }

  handleClick () {
    this.isChecked = !this._isChecked;
  }

  swapFont (families) {
    this.ascend(PasswordEmission.ADJUST, this.width);
  }
}

export { PasswordToggle };
