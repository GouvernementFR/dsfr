import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import ID from './id';

class ToggleActionee extends ComponentActionee {
  constructor () {
    super(1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'ToggleActionee';
  }

  init () {
    this.detectCheckableType();
    this.listenCheckable();
  }

  get label () {
    const label = this.node.parentNode.querySelector(api.internals.ns.selector('toggle__label'));
    if (label) {
      const firstText = this.getFirstText(label);
      if (firstText) return firstText;
    }

    return 'interrupteur';
  }

  get component () {
    return ID;
  }
}

export { ToggleActionee };
