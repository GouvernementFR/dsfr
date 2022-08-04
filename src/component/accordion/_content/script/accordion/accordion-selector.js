import api from '../../api.js';

export const AccordionSelector = {
  GROUP: api.internals.ns.selector('accordions-group'),
  COLLAPSE: `${api.internals.ns.selector('accordion')} > ${api.internals.ns.selector('collapse')}`
};
