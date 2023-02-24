import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class NavigationActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'NavigationActionee';
  }

  get label () {
    return 'Navigation';
  }

  get component () {
    return ID;
  }
}

export { NavigationActionee };
