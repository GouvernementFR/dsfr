import api from '../../../../api';

const TRANSLATE = api.internals.ns.selector('translate');
const COLLAPSE = api.internals.ns.selector('collapse');
const NO_REDUCE = `:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`;

export const TranslateSelector = {
  BUTTON: `${TRANSLATE}__btn${NO_REDUCE}`,
  COLLAPSE: `${TRANSLATE} > ${COLLAPSE}${NO_REDUCE}, ${TRANSLATE} > *:not(${TRANSLATE}):not(${COLLAPSE}) > ${COLLAPSE}${NO_REDUCE}, ${TRANSLATE} > *:not(${TRANSLATE}):not(${COLLAPSE}) > *:not(${TRANSLATE}):not(${COLLAPSE}) > ${COLLAPSE}${NO_REDUCE}`,
  COLLAPSE_LEGACY: `${TRANSLATE} ${COLLAPSE}`
};
