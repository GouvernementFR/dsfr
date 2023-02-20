import { ComponentActionee } from '../component-actionee';
import { ActionElement } from '../../../analytics/action/action-element';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class ModalButtonActionee extends ComponentActionee {
  static get instanceClassName () {
    return 'ModalButtonActionee';
  }

  init () {
    this._button = this.element.getInstance('ModalButton');
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

export { ModalButtonActionee };
