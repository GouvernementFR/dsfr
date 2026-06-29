import api from '../../../../api';

export const ContentSelector = {
  CONTENT: `${api.internals.ns.selector('content-media')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  IMG: api.internals.ns.selector('content-media__img')
};
