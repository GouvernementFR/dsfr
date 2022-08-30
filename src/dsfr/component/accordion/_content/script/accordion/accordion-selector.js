import ref from '../../../ref.js';

export const AccordionSelector = {
  GROUP: ref.internals.ns.selector('accordions-group'),
  COLLAPSE: `${ref.internals.ns.selector('accordion')} > ${ref.internals.ns.selector('collapse')}`
};
