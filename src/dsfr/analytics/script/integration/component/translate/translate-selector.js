import api from '../../../../api';

const TRANSLATE = api.internals.ns.selector('translate');
const COLLAPSE = api.internals.ns.selector('collapse');

export const TranslateSelector = {
  BUTTON: `${TRANSLATE}__btn`,
  COLLAPSE: `${TRANSLATE} > ${COLLAPSE}, ${TRANSLATE} > *:not(${TRANSLATE}):not(${COLLAPSE}) > ${COLLAPSE}, ${TRANSLATE} > *:not(${TRANSLATE}):not(${COLLAPSE}) > *:not(${TRANSLATE}):not(${COLLAPSE}) > ${COLLAPSE}`,
  COLLAPSE_LEGACY: `${TRANSLATE} ${COLLAPSE}`
};
