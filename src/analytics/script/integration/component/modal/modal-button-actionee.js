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
    this.isMuted = true;
  }

  get button () {
    return this.element.getInstance('ModalButton');
  }

  get label () {
    const firstText = this.getFirstText();
    if (firstText) return firstText;
    return 'bouton de modale';
  }

  get component () {
    return ID;
  }
}

export { ModalButtonActionee };
