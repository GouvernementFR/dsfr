import api from '../../../../api';

export const DownloadSelector = {
  LINK: `${api.internals.ns.selector('download__link')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
