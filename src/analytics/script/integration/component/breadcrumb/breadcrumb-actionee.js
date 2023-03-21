import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { BreadcrumbButtonActionee } from './breadcrumb-button-actionee';
import ID from './id';

class BreadcrumbActionee extends ComponentActionee {
  constructor () {
    super(null, 2);
  }

  static get instanceClassName () {
    return 'BreadcrumbActionee';
  }

  init () {
    if (!this.isBreakpoint(api.core.Breakpoints.MD)) {
      this.register(`[aria-controls="${this.id}"]`, BreadcrumbButtonActionee);
      this.listenDisclose();
    } else {
      this.impress();
    }
  }

  get label () {
    return 'fil d\'ariane';
  }

  get component () {
    return ID;
  }
}

export { BreadcrumbActionee };
