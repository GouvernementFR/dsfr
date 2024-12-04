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
    this.isMuted = true;
    this.id = this.node.id || this.registration.creator.node.id;
  }

  get label () {
    const firstText = this.getFirstText();
    if (firstText) return firstText;
    return 'voir le fil d\'ariane';
  }

  get component () {
    return null;
  }
}

export { BreadcrumbButtonActionee };
