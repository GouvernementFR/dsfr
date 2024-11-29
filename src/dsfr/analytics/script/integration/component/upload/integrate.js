import api from '../../../../api';
import { UploadSelector } from './upload-selector';
import { UploadActionee } from './upload-actionee';
import { joinSelector } from '../../join-selector';

const integrateUpload = (selector = '') => {
  api.internals.register(joinSelector(UploadSelector.UPLOAD, selector), UploadActionee);
};

export default integrateUpload;
