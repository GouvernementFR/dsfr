import api from '../../api.js';

console.log(api.internals.ns.attr.selector('assess-file'));
export const DownloadSelector = {
  DOWNLOAD_ASSESS_FILE: `${api.internals.ns.attr.selector('assess-file')}`,
  DOWNLOAD_DETAIL: `${api.internals.ns.selector('download__detail')}`
};
