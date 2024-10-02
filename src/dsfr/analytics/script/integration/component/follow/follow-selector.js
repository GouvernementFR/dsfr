import api from '../../../../api';

export const FollowSelector = {
  FOLLOW: api.internals.ns.selector('follow'),
  NEWSLETTER_INPUT_GROUP: api.internals.ns.selector('follow__newsletter') + ' ' + api.internals.ns.selector('input-group')
};
