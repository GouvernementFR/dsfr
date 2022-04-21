import api from './api.js';
import { AssessFile } from './script/download/assess-file.js';
import { DownloadSelector } from './script/download/download-selector';

api.download = {
  DownloadSelector: DownloadSelector,
  AssessFile: AssessFile

};

export default api;
