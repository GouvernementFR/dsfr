import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { BreadcrumbButtonActionee } from './breadcrumb-button-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class BreadcrumbActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 2);
  }

  static get instanceClassName () {
    return 'BreadcrumbActionee';
  }

  init () {
    if (!this.isBreakpoint(api.core.Breakpoints.MD)) {
      this.register(`[aria-controls="${this.id}"]`, BreadcrumbButtonActionee);
      this.listenDisclose();
    }
  }

  handleDisclose () {
    this.act();
  }

  get label () {
    return 'fil d\'ariane';
  }

  get component () {
    return ID;
  }
}

export { BreadcrumbActionee };
