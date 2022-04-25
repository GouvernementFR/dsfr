import api from '../../api.js';

export const DownloadSelector = {
  DOWNLOAD_ASSESS_FILE: `${api.internals.ns.attr.selector('assess-file')}`,
  DOWNLOAD_DETAIL: `${api.internals.ns.selector('download__detail')}`
};
