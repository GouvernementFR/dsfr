import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { ActionElement } from '../../../analytics/action/action-element';
import { Type } from '../../../analytics/action/type';
import { AccordionButtonActionee } from './accordion-button-actionee';
import ID from './id';

class AccordionActionee extends ComponentActionee {
  static get instanceClassName () {
    return 'AccordionActionee';
  }

  init () {
    this.register(`[aria-controls="${this.id}"]`, AccordionButtonActionee);
    this._instance = this.element.getInstance('Collapse');
    this._actionElement = new ActionElement(this.node, Type.DISCLOSE);
    this.listen(api.core.DisclosureEvent.DISCLOSE, this.handleDisclose.bind(this));
  }

  handleDisclose () {
    this._actionElement.act();
  }

  get label () {
    const button = this._instance.buttons.filter(button => button.isPrimary)[0];
    console.log('button', button, button.node, button.node.textContent.trim());
    if (!button) return null;
    return button.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { AccordionActionee };
