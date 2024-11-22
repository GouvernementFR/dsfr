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
    this.listenActionClick();
  }

  get label () {
    const firstText = this.getFirstText();
    if (firstText) return firstText;

    return 'lien de navigation';
  }

  get component () {
    return ID;
  }
}

export { NavigationLinkActionee };
