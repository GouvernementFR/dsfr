import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { ActionElement } from '../../../analytics/action/action-element';
import { AccordionSelector } from './accordion-selector';
import { AccordionButtonActionee } from './accordion-button-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class AccordionActionee extends ComponentActionee {
  constructor () {
    super(Type.DISCLOSE, 2);
  }

  static get instanceClassName () {
    return 'AccordionActionee';
  }

  init () {
    this.register(`[aria-controls="${this.id}"]`, AccordionButtonActionee);
    this._instance = this.element.getInstance('Collapse');
    this.listen(api.core.DisclosureEvent.DISCLOSE, this.handleDisclose.bind(this));
  }

  handleDisclose () {
    this.act();
  }

  get label () {
    const accordion = this.node.closest(AccordionSelector.ACCORDION)[0];
    if (accordion) {
      const title = accordion.querySelector(AccordionSelector.TITLE)[0];
      if (title) return title.textContent.trim();
    }
    const button = this._instance.buttons.filter(button => button.isPrimary)[0];
    if (button) return button.node.textContent.trim();
    return null;
  }

  get component () {
    return ID;
  }
}

export { AccordionActionee };
