import api from '../../../../api';
import { UploadSelector } from './upload-selector';
import { UploadActionee } from './upload-actionee';

const integrateUpload = () => {
  api.internals.register(UploadSelector.UPLOAD, UploadActionee);
};

export default integrateUpload;
