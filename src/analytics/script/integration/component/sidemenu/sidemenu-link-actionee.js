import { ComponentActionee } from '../component-actionee';
import ID from './id';

class SidemenuLinkActionee extends ComponentActionee {
  constructor () {
    super(null, 2);
  }

  static get instanceClassName () {
    return 'SidemenuLinkActionee';
  }

  init () {
    this.detectInteraction();
    this.listenClick();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { SidemenuLinkActionee };
