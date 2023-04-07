import { ComponentActionee } from '../component-actionee';
import ID from './id';

class ModalButtonActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'ModalButtonActionee';
  }

  init () {
    this.setClickType();
    this.id = this.node.id || this.registration.creator.node.id;
    this._button = this.element.getInstance('ModalButton');
    this.listenClick();
  }

  get button () {
    return this.element.getInstance('ModalButton');
  }

  click () {
    if (this.button.disclosed) this.act();
  }

  get label () {
    return this.getFirstText();
  }

  get component () {
    return ID;
  }
}

export { ModalButtonActionee };
