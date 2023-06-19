import api from '../../api.js';
import { AccordionSelector } from './accordion-selector';

class Accordion extends api.core.Instance {
  static get instanceClassName () {
    return 'Accordion';
  }

  get collapsePrimary () {
    const buttons = this.element.children.map(child => child.getInstance('CollapseButton')).filter(button => button !== null && button.hasClass(AccordionSelector.BUTTON));
    return buttons[0];
  }
}

export { Accordion };
