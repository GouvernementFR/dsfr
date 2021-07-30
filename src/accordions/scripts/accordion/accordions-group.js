import api from '../../api.js';
import { AccordionSelectors } from './accordion-selectors.js';

class AccordionsGroup extends api.core.CollapsesGroup {
  static get instanceClassName () {
    return 'AccordionsGroup';
  }

  validate (member) {
    return member.node.matches(AccordionSelectors.COLLAPSE);
  }
}

export { AccordionsGroup };
