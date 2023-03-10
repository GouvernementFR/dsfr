import { ComponentActionee } from '../component-actionee';
import ID from './id';

class NavigationLinkActionee extends ComponentActionee {
  constructor () {
    super(null, 2);
  }

  static get instanceClassName () {
    return 'NavigationLinkActionee';
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

export { NavigationLinkActionee };
