import api from '../../../../api';
import { DownloadSelector } from './download-selector';
import { DownloadActionee } from './download-actionee';

const integrateDownload = () => {
  api.internals.register(DownloadSelector.LINK, DownloadActionee);
};

export default integrateDownload;
