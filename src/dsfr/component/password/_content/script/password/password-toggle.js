import ref from '../../../ref.js';
import { PasswordEmission } from './password-emission.js';

class PasswordToggle extends ref.api.Instance {
  static get instanceClassName () {
    return 'PasswordToggle';
  }

  init () {
    this.listen('click', this.toggle.bind(this));
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

  toggle () {
    this.isChecked = !this._isChecked;
  }

  swapFont () {
    this.ascend(PasswordEmission.ADJUST, this.width);
  }
}

export { PasswordToggle };
