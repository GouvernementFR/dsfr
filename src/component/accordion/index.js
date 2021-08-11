import api from './api.js';
import { AccordionsGroup } from './script/accordion/accordions-group.js';
import { AccordionSelector } from './script/accordion/accordion-selector.js';

api.accordion = {
  AccordionSelector: AccordionSelector,
  AccordionsGroup: AccordionsGroup
};

export default api;
