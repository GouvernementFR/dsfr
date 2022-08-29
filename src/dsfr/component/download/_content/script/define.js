import api from '../ref.js';
import { AssessFile } from './download/assess-file.js';
import { DownloadSelector } from './download/download-selector';

api.download = {
  DownloadSelector: DownloadSelector,
  AssessFile: AssessFile
};

export default api;
