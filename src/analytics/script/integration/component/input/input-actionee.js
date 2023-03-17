import { ComponentActionee } from '../component-actionee';
import api from '../../../../api.js';
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
    console.log('input');
    this._input = this.node.querySelector(api.internals.ns.selector('input'));
    this._label = this.node.querySelector(api.internals.ns.selector('label'));
  }

  get label () {
    if (this._label) return this._label.textContent.trim();

    return 'Champ de saisie';
  }

  getData () {
    if (this._input) return { component_value: this._input.value.trim() };
    return '';
  }

  get component () {
    return ID;
  }
}

export { InputActionee };
