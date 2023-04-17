import { ComponentActionee } from '../component-actionee';
import ID from './id';

class NavigationLinkActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'NavigationLinkActionee';
  }

  init () {
    this.detectInteractionType();
    this.listenClick();
  }

  get label () {
    return this.getFirstText();
  }

  get component () {
    return ID;
  }
}

export { NavigationLinkActionee };
