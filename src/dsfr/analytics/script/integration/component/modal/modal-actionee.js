import { ComponentActionee } from '../component-actionee';
import { ModalSelector } from './modal-selector.js';
import ID from './id';

class ModalActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'ModalActionee';
  }

  init () {
    this.setDiscloseType();
    this.detectLevel();
    this.listenDisclose();
  }

  get label () {
    const title = this.node.querySelector(ModalSelector.TITLE);

    if (title) {
      const text = this.getFirstText(title);
      if (text) return text;
    }

    const heading = this.getHeadingLabel(2);
    if (heading) return heading;

    const instance = this.element.getInstance('Modal');
    if (instance) {
      const button = instance.buttons.filter(button => button.isPrimary)[0];
      if (button) {
        const text = this.getFirstText(button.node);
        if (text) return text;
      }
    }
    return 'modale';
  }

  get component () {
    return ID;
  }
}

export { ModalActionee };
