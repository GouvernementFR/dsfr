import { ComponentActionee } from '../component-actionee';
import { ActionElement } from '../../../analytics/action/action-element';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class AccordionButtonActionee extends ComponentActionee {
  static get instanceClassName () {
    return 'AccordionButtonActionee';
  }

  init () {
    this._button = this.element.getInstance('CollapseButton');
    this._actionElement = new ActionElement(this.node, Type.CLICK);
    this.listen('click', this.click.bind(this));
  }

  click () {
    if (!this._button.disclosed) this._actionElement.act();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { AccordionButtonActionee };
