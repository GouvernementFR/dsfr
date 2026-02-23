import api from '../../../../api';

export const ConsentSelector = {
  BANNER: `${api.internals.ns.selector('consent-banner')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
