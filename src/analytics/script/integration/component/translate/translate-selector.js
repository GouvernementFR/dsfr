import api from '../../../../api';

const TRANSLATE = api.internals.ns.selector('translate');
const COLLAPSE = api.internals.ns.selector('collapse');

export const TranslateSelector = {
  BUTTON: `${TRANSLATE}__btn`,
  COLLAPSE: `${TRANSLATE} > ${COLLAPSE}, ${TRANSLATE} > *:not(${TRANSLATE}, ${COLLAPSE}) > ${COLLAPSE}, ${TRANSLATE} > *:not(${TRANSLATE}, ${COLLAPSE}) > *:not(${TRANSLATE}, ${COLLAPSE}) > ${COLLAPSE}`,
  COLLAPSE_LEGACY: `${TRANSLATE} ${COLLAPSE}`
};
