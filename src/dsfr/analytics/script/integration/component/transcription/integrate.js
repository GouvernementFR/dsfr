import api from '../../../../api';
import { TranscriptionSelector } from './transcription-selector';
import { TranscriptionActionee } from './transcription-actionee';
import { joinSelector } from '../../join-selector';

const integrateTranscription = (selector = '') => {
  api.internals.register(joinSelector(TranscriptionSelector.COLLAPSE, selector), TranscriptionActionee);
};

export default integrateTranscription;
