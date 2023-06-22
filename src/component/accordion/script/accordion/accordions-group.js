import api from '../../api.js';
import { AccordionSelector } from './accordion-selector.js';

class AccordionsGroup extends api.core.CollapsesGroup {
  static get instanceClassName () {
    return 'AccordionsGroup';
  }

  validate (member) {
    const match = member.node.matches(api.internals.legacy.isLegacy ? AccordionSelector.COLLAPSE_LEGACY : AccordionSelector.COLLAPSE);
    return super.validate(member) && match;
  }
}

export { AccordionsGroup };
