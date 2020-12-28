import { Collapse } from '@gouvfr/core/src/scripts';
import { AccordionButton } from './accordion-button';
import { AccordionsGroup } from './accordions-group';
import { ACCORDION_SELECTOR } from './accordion-constants';

class Accordion extends Collapse {
  get GroupConstructor () { return AccordionsGroup; }

  buttonFactory (element) {
    return new AccordionButton(element, this);
  }

  static get selector () { return ACCORDION_SELECTOR; }
}

export { Accordion };
