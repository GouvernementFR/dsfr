import api from './api.js';
import { AccordionsGroup } from './scripts/accordion/accordions-group';
import { AccordionSelectors } from './scripts/accordion/accordion-selectors';

api.accordions = {
  AccordionSelectors: AccordionSelectors,
  AccordionsGroup: AccordionsGroup
};

export default api;
