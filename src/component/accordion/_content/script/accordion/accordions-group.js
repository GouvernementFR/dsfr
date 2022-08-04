import api from '../../api.js';
import { AccordionSelector } from './accordion-selector.js';

class AccordionsGroup extends api.core.CollapsesGroup {
  static get instanceClassName () {
    return 'AccordionsGroup';
  }

  validate (member) {
    return member.node.matches(AccordionSelector.COLLAPSE);
  }
}

export { AccordionsGroup };
