import { CollapsesGroup } from '@gouvfr/core/src/scripts';
import { ACCORDIONS_GROUP } from './accordion-constants';

class AccordionsGroup extends CollapsesGroup {
  static get selector () { return ACCORDIONS_GROUP; }
}

export { AccordionsGroup };
