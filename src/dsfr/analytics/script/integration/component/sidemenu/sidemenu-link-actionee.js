import { ComponentActionee } from '../component-actionee';
import ID from './id';

class SidemenuLinkActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'SidemenuLinkActionee';
  }

  init () {
    this.detectInteractionType();
    this.listenActionClick();
  }

  get label () {
    const firstText = this.getFirstText();
    if (firstText) return firstText;

    return 'lien menu latéral';
  }

  get component () {
    return ID;
  }
}

export { SidemenuLinkActionee };
