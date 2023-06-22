import api from '../../api.js';

const ACCORDION = api.internals.ns.selector('accordion');
const COLLAPSE = api.internals.ns.selector('collapse');

export const AccordionSelector = {
  GROUP: api.internals.ns.selector('accordions-group'),
  ACCORDION: ACCORDION,
  COLLAPSE: `${ACCORDION} > ${COLLAPSE}, ${ACCORDION} > *:not(${ACCORDION}, ${COLLAPSE}) > ${COLLAPSE}, ${ACCORDION} > *:not(${ACCORDION}, ${COLLAPSE}) > *:not(${ACCORDION}, ${COLLAPSE}) > ${COLLAPSE}`,
  COLLAPSE_LEGACY: `${ACCORDION} ${COLLAPSE}`,
  BUTTON: `${ACCORDION}__btn`
};
