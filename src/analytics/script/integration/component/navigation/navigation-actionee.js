import { ComponentActionee } from '../component-actionee';
import { NavigationSelector } from './navigation-selector';
import { NavigationLinkActionee } from './navigation-link-actionee';
import ID from './id';

class NavigationActionee extends ComponentActionee {
  static get instanceClassName () {
    return 'NavigationActionee';
  }

  init () {
    console.log('NAVIGATION');
    this.register(NavigationSelector.LINK, NavigationLinkActionee);
  }

  get label () {
    return 'Navigation';
  }

  get component () {
    return ID;
  }
}

export { NavigationActionee };
