import api from '../../../../api';
import { TranscriptionSelector } from './transcription-selector';
import { TranscriptionActionee } from './transcription-actionee';

const integrateTranscription = () => {
  api.internals.register(TranscriptionSelector.COLLAPSE, TranscriptionActionee);
};

export default integrateTranscription;
