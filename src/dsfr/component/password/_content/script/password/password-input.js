import ref from '../../../ref.js';
import { PasswordEmission } from './password-emission.js';

class PasswordInput extends ref.core.Instance {
  static get instanceClassName () {
    return 'PasswordInput';
  }

  init () {
    this.addDescent(PasswordEmission.TOGGLE, this.toggle.bind(this));
    this._isRevealed = this.hasAttribute('type') === 'password';
    this.listen('keydown', this.capslock.bind(this)); // for capslock enabled
    this.listen('keyup', this.capslock.bind(this)); // for capslock desabled
  }

  toggle (value) {
    this.isRevealed = value;
    this.setAttribute('type', value ? 'text' : 'password');
  }

  get isRevealed () {
    return this._isRevealed;
  }

  capslock (event) {
    if (event.getModifierState('CapsLock')) {
      this.node.parentNode.setAttribute(ref.internals.ns.attr('capslock'), '');
    } else {
      this.node.parentNode.removeAttribute(ref.internals.ns.attr('capslock'));
    }
  }

  set isRevealed (value) {
    this._isRevealed = value;
    this.setAttribute('type', value ? 'text' : 'password');
  }
}

export { PasswordInput };
