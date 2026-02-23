import api from '../../../../api';

export const ShareSelector = {
  SHARE: `${api.internals.ns.selector('share')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  TITLE: api.internals.ns.selector('share__title')
};
