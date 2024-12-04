import api from './api.js';
import { Accordion } from './script/accordion/accordion';
import { AccordionsGroup } from './script/accordion/accordions-group.js';
import { AccordionSelector } from './script/accordion/accordion-selector.js';

api.accordion = {
  Accordion: Accordion,
  AccordionSelector: AccordionSelector,
  AccordionsGroup: AccordionsGroup
};

export default api;
