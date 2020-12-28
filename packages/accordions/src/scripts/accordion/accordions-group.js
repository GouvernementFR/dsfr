import { CollapsesGroup } from '@gouvfr/core/src/scripts';
import { Accordion } from './accordion';
import { ACCORDIONS_GROUP } from './accordion-constants';

class AccordionsGroup extends CollapsesGroup {
  static get MemberConstructor () { return Accordion; }

  static get selector () { return ACCORDIONS_GROUP; }
}

export { AccordionsGroup };
