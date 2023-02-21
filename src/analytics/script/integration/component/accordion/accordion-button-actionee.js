import { ComponentActionee } from '../component-actionee';
import { ActionElement } from '../../../analytics/action/action-element';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class AccordionButtonActionee extends ComponentActionee {
  constructor () {
    super(Type.CLICK, 2);
  }

  static get instanceClassName () {
    return 'AccordionButtonActionee';
  }

  init () {
    this.id = this.node.id || this.registration.creator.node.id;
    this._button = this.element.getInstance('CollapseButton');
    this.listen('click', this.click.bind(this));
  }

  click () {
    if (!this._button.disclosed) this.act();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { AccordionButtonActionee };
