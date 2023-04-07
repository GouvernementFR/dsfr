import { ComponentActionee } from '../component-actionee';
import api from '../../../../api';

class BreadcrumbButtonActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'BreadcrumbButtonActionee';
  }

  init () {
    if (this.isBreakpoint(api.core.Breakpoints.MD)) return;
    this.setClickType();
    this.id = this.node.id || this.registration.creator.node.id;
    this.listenClick();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return null;
  }
}

export { BreadcrumbButtonActionee };
