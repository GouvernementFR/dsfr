import { ComponentActionee } from '../component-actionee';

class NavigationActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'NavigationActionee';
  }

  get label () {
    return 'navigation';
  }
}

export { NavigationActionee };
