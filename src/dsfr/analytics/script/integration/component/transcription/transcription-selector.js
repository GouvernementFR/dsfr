import api from '../../../../api';

const TRANSCRIPTION = api.internals.ns.selector('transcription');
const COLLAPSE = api.internals.ns.selector('collapse');
const NO_REDUCE = `:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`;

export const TranscriptionSelector = {
  TRANSCRIPTION: TRANSCRIPTION,
  COLLAPSE: `${TRANSCRIPTION} > ${COLLAPSE}${NO_REDUCE}, ${TRANSCRIPTION} > *:not(${TRANSCRIPTION}):not(${COLLAPSE}) > ${COLLAPSE}${NO_REDUCE}, ${TRANSCRIPTION} > *:not(${TRANSCRIPTION}):not(${COLLAPSE}) > *:not(${TRANSCRIPTION}):not(${COLLAPSE}) > ${COLLAPSE}${NO_REDUCE}`,
  COLLAPSE_LEGACY: `${TRANSCRIPTION} ${COLLAPSE}`,
  TITLE: `${TRANSCRIPTION}__title`
};
