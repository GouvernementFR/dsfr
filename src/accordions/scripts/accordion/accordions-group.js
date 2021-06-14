import api from '../../api.js';
import { ACCORDION_COLLAPSE_SELECTOR } from './constants';

class AccordionsGroup extends api.core.CollapsesGroup {
  validate (member) {
    return member.element.node.matches(ACCORDION_COLLAPSE_SELECTOR);
  }
}

export { AccordionsGroup };

