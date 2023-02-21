import { ComponentActionee } from '../component-actionee';
import { ActionElement } from '../../../analytics/action/action-element';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class TabButtonActionee extends ComponentActionee {
  static get instanceClassName () {
    return 'TabButtonActionee';
  }

  init () {
    this._button = this.element.getInstance('TabButton');
    this._actionElement = new ActionElement(this.node, Type.CLICK);
    this.listen('click', this.click.bind(this));
  }

  click () {
    this._actionElement.act();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { TabButtonActionee };
