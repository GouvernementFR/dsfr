import { ComponentActionee } from '../component-actionee';
import api from '../../../../api.js';
import ID from './id';

class UploadActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'UploadActionee';
  }

  init () {
    this.setChangeType();
    this._label = this.node.parentNode.querySelector(api.internals.ns.selector('label'));
    this.listenChange();
  }

  setChangeValue (e) {
    if (!e.target || !e.target.files) return;
    const value = Array.from(e.target.files).map(file => /(?:\.([^.]+))?$/.exec(file.name)[1]).filter((name, index, array) => array.indexOf(name) === index).join(' - ');
    if (value) this.value = value;
  }

  get label () {
    if (this._label) {
      const text = this.getFirstText(this._label);
      if (text) return text;
    }

    return 'ajout de fichier';
  }

  get component () {
    return ID;
  }
}

export { UploadActionee };
