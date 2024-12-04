import api from '../../../../api';
import { DownloadSelector } from './download-selector';
import { DownloadActionee } from './download-actionee';
import { joinSelector } from '../../join-selector';

const integrateDownload = (selector) => {
  api.internals.register(joinSelector(DownloadSelector.LINK, selector), DownloadActionee);
};

export default integrateDownload;
