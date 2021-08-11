import api from './api.js';
import { AccordionsGroup } from './script/accordion/accordions-group.js';
import { AccordionSelectors } from './script/accordion/accordion-selectors.js';

api.accordion = {
  AccordionSelectors: AccordionSelectors,
  AccordionsGroup: AccordionsGroup
};

export default api;
