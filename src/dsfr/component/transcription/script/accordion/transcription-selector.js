import api from '../../api.js';

const TRANSCRIPTION = api.internals.ns.selector('transcription');

export const TranscriptionSelector = {
  TRANSCRIPTION: TRANSCRIPTION,
  BUTTON: `${TRANSCRIPTION}__btn`
};
