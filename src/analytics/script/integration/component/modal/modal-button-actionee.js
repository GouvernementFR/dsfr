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
    this.listenClick();
  }

  get button () {
    return this.element.getInstance('ModalButton');
  }

  click () {
    if (this.button && !this.button.disclosed) this.act();
  }

  get label () {
    const firstText = this.getFirstText();
    if (firstText) return firstText;
    return null;
  }

  get component () {
    return ID;
  }
}

export { ModalButtonActionee };
