import api from '../../../../api';

export const LinkSelector = {
  LINK: `${api.internals.ns.selector('link')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
