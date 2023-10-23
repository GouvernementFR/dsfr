import api from '../../../../api';

const TRANSCRIPTION = api.internals.ns.selector('transcription');
const COLLAPSE = api.internals.ns.selector('collapse');

export const TranscriptionSelector = {
  TRANSCRIPTION: TRANSCRIPTION,
  COLLAPSE: `${TRANSCRIPTION} > ${COLLAPSE}, ${TRANSCRIPTION} > *:not(${TRANSCRIPTION}, ${COLLAPSE}) > ${COLLAPSE}, ${TRANSCRIPTION} > *:not(${TRANSCRIPTION}, ${COLLAPSE}) > *:not(${TRANSCRIPTION}, ${COLLAPSE}) > ${COLLAPSE}`,
  COLLAPSE_LEGACY: `${TRANSCRIPTION} ${COLLAPSE}`,
  TITLE: `${TRANSCRIPTION}__title`
};
