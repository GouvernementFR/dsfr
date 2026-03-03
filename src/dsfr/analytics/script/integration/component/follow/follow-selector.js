import api from '../../../../api';

export const FollowSelector = {
  FOLLOW: `${api.internals.ns.selector('follow')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  NEWSLETTER_INPUT_GROUP: `${api.internals.ns.selector('follow__newsletter')} ${api.internals.ns.selector('input-group')}`
};
