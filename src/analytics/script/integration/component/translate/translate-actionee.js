import { ComponentActionee } from '../component-actionee';
import { TranslateSelector } from './translate-selector';
import { TranslateButtonActionee } from './translate-button-actionee';
import ID from './id';

class TranslateActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'TranslateActionee';
  }

  init () {
    this.setDiscloseType();
    this.register(`[aria-controls="${this.id}"]`, TranslateButtonActionee);
    this.listenDisclose();
  }

  get label () {
    const button = this.node.querySelector(TranslateSelector.BUTTON);
    if (button) {
      const title = button.getAttribute('title');
      if (title) return title;
    }

    return 'Sélecteur de langue';
  }

  get component () {
    return ID;
  }
}

export { TranslateActionee };
