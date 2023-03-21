import { ComponentActionee } from '../component-actionee';
import api from '../../../../api.js';
import { ButtonEmission } from '../button/button-emission';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class InputActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'InputActionee';
  }

  init () {
    this._input = this.querySelector(api.internals.ns.selector('input'));
    this._label = this.querySelector(api.internals.ns.selector('label'));
    this._inputWrap = this.querySelector(api.internals.ns.selector('input-wrap'));

    if (this._inputWrap) {
      this._type = Type.CLICK;
      this.addAscent(ButtonEmission.CLICK, this.send.bind(this));
      const button = this.element.getDescendantInstances('ButtonActionee', null, true)[0];
      if (button) button.isMuted = true;
      this._input = this._inputWrap.querySelector('input');
      this._input.addEventListener('keydown', this.handleKey.bind(this));
    }
  }

  handleKey (e) {
    if (e.keyCode === 13) {
      this.send();
    }
  }

  send () {
    this.act({ component_value: this._input.value.trim() });
  }

  get label () {
    if (this._label) return this._label.textContent.trim();

    return 'Champ de saisie';
  }

  get component () {
    return ID;
  }
}

export { InputActionee };
