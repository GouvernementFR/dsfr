import api from '../../../../api';

export const BadgeSelector = {
  BADGE: `${api.internals.ns.selector('badge')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
