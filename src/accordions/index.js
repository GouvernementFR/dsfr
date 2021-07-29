import api from './api.js';
import { AccordionsGroup } from './scripts/accordion/accordions-group.js';
import { AccordionSelectors } from './scripts/accordion/accordion-selectors.js';

api.accordions = {
  AccordionSelectors: AccordionSelectors,
  AccordionsGroup: AccordionsGroup
};

export default api;
