import { ComponentActionee } from '../component-actionee';
import ID from './id';

class TabButtonActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'TabButtonActionee';
  }

  init () {
    this.isMuted = true;
  }

  get label () {
    const text = this.getFirstText();
    if (text) return text;
    return 'bouton onglet';
  }

  get component () {
    return ID;
  }
}

export { TabButtonActionee };
