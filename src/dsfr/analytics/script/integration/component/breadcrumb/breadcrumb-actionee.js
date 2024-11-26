import { ComponentActionee } from '../component-actionee';
import ID from './id';

class BreadcrumbActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'BreadcrumbActionee';
  }

  get label () {
    return 'fil d\'ariane';
  }

  get component () {
    return ID;
  }
}

export { BreadcrumbActionee };
