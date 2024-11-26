import api from './api.js';
import { Transcription } from './script/accordion/transcription';
import { TranscriptionSelector } from './script/accordion/transcription-selector.js';

api.transcription = {
  Transcription: Transcription,
  TranscriptionSelector: TranscriptionSelector
};

export default api;
