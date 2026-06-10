import api from '../../../../api';

export const AccordionSelector = {
  ACCORDION: api.internals.ns.selector('accordion'),
  TITLE: api.internals.ns.selector('accordion__title'),
  COLLAPSE: `${api.accordion.AccordionSelector.COLLAPSE}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
