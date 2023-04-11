import api from '../../../../api';

export const TranscriptionSelector = {
  TRANSCRIPTION: api.internals.ns.selector('transcription'),
  COLLAPSE: `${api.internals.ns.selector('transcription')} ${api.internals.ns.selector('collapse')}`,
  TITLE: api.internals.ns.selector('transcription__title')
};
