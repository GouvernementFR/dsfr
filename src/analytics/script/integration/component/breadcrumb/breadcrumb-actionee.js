import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { BreadcrumbButtonActionee } from './breadcrumb-button-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class BreadcrumbActionee extends ComponentActionee {
  constructor () {
    super(Type.DISCLOSE, 2);
  }

  static get instanceClassName () {
    return 'BreadcrumbActionee';
  }

  init () {
    this.register(`[aria-controls="${this.id}"]`, BreadcrumbButtonActionee);
    this.listen(api.core.DisclosureEvent.DISCLOSE, this.handleDisclose.bind(this));
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
