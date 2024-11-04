import { ComponentActionee } from '../component-actionee';
import { TranslateSelector } from './translate-selector';
import ID from './id';

class TranslateActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'TranslateActionee';
  }

  get label () {
    const button = this.node.querySelector(TranslateSelector.BUTTON);
    if (button) {
      const title = button.getAttribute('title');
      if (title) return title;
    }

    return 'sélecteur de langue';
  }

  get component () {
    return ID;
  }
}

export { TranslateActionee };
