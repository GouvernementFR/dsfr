import api from '../ref.js';
import { AccordionsGroup } from './accordion/accordions-group.js';
import { AccordionSelector } from './accordion/accordion-selector.js';

api.accordion = {
  AccordionSelector: AccordionSelector,
  AccordionsGroup: AccordionsGroup
};

export default api;
