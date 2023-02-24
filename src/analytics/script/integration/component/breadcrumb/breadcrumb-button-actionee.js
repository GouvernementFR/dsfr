import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';

class BreadcrumbButtonActionee extends ComponentActionee {
  constructor () {
    super(Type.CLICK, 2);
  }

  static get instanceClassName () {
    return 'BreadcrumbButtonActionee';
  }

  init () {
    this.id = this.node.id || this.registration.creator.node.id;
    this._button = this.element.getInstance('BreadcrumbButton');
    this.listenClick();
  }

  handleClick () {
    this._actionElement.act();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return null;
  }
}

export { BreadcrumbButtonActionee };
