import api from '../../../../api';

export const FollowSelector = {
  FOLLOW: api.internals.ns.selector('follow'),
  NEWSLETTER_INPUT: api.internals.ns.selector('follow__newsletter input[type="email"]')
};
