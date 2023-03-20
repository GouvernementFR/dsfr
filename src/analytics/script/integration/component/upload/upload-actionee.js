import { ComponentActionee } from '../component-actionee';
import api from '../../../../api.js';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class UploadActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'UploadActionee';
  }

  init () {
    this._input = this.querySelector(api.internals.ns.selector('input'));
    this._label = this.querySelector(api.internals.ns.selector('label'));
  }

  get label () {
    if (this._label) return this._label.textContent.trim();

    return 'Ajout de fichier';
  }

  getData () {
    if (this._input) return { component_value: this._input.value.trim() };
    return '';
  }

  get component () {
    return ID;
  }
}

export { UploadActionee };
