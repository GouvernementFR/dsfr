import { ComponentActionee } from '../component-actionee';
import ID from './id';
import { ButtonEmission } from './button-emission';

class ButtonActionee extends ComponentActionee {
  constructor () {
    super(1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'ButtonActionee';
  }

  init () {
    this.detectInteractionType();
    this.listenClick();
  }

  handleClick () {
    this.ascend(ButtonEmission.CLICK);
    this.act();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { ButtonActionee };
