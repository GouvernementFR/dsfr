import api from '../../../../api';

const TRANSCRIPTION = api.internals.ns.selector('transcription');
const COLLAPSE = api.internals.ns.selector('collapse');

export const TranscriptionSelector = {
  TRANSCRIPTION: TRANSCRIPTION,
  COLLAPSE: `${TRANSCRIPTION} > ${COLLAPSE}, ${TRANSCRIPTION} > *:not(${TRANSCRIPTION}):not(${COLLAPSE}) > ${COLLAPSE}, ${TRANSCRIPTION} > *:not(${TRANSCRIPTION}):not(${COLLAPSE}) > *:not(${TRANSCRIPTION}):not(${COLLAPSE}) > ${COLLAPSE}`,
  COLLAPSE_LEGACY: `${TRANSCRIPTION} ${COLLAPSE}`,
  TITLE: `${TRANSCRIPTION}__title`
};
