import api from '../../api.js';
import { AccordionSelectors } from './accordion-selectors';

class AccordionsGroup extends api.core.CollapsesGroup {
  validate (member) {
    return member.element.node.matches(AccordionSelectors.COLLAPSE);
  }
}

export { AccordionsGroup };
