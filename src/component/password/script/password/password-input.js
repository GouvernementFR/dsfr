import api from '../../api.js';
import { PasswordEmission } from './password-emission.js';

class PasswordInput extends api.core.Instance {
  static get instanceClassName () {
    return 'PasswordInput';
  }

  init () {
    this.addAscent(PasswordEmission.TOGGLE, this.toggle.bind(this));
    console.log('------------------', this.getAttribute('type'));
    this._isRevealed = this.hasAttribute('type') === 'password';
    this.listen('keydown', this.capslock.bind(this));
    this.listen('keyup', this.capslock.bind(this));
  }

  toggle (value) {
    console.log('-----------------TOOGLE-', value);

    this.isRevealed = value;
    this.setAttribute('type', value ? 'text' : 'password');
  }

  get isRevealed () {
    return this._isRevealed;
  }

  capslock (event) {
    console.log('------------------', event.keyCode);
    if (event.getModifierState('CapsLock')) {
      this.node.parentNode.classList.add(api.internals.ns.selector('icon-capslock-line', ''));
    } else {
      this.node.parentNode.classList.remove(api.internals.ns.selector('icon-capslock-line', ''));
    }
  }

  set isRevealed (value) {
    this._isRevealed = value;
    console.log('------------------', this.getAttribute('type'));
    this.setAttribute('type', value ? 'text' : 'password');
  }
}

export { PasswordInput };
