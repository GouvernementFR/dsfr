import api from '../../../../api';

export const UploadSelector = {
  UPLOAD: `${api.internals.ns.selector('upload')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
