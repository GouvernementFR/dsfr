import api from '../../../../api.js';

export const PaginationSelector = {
  PAGINATION: `${api.internals.ns.selector('pagination')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  LINK: `${api.internals.ns.selector('pagination__link')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  NEXT_LINK: api.internals.ns.selector('pagination__link--next'),
  LAST_LINK: api.internals.ns.selector('pagination__link--last'),
  ANALYTICS_TOTAL: api.internals.ns.attr('analytics-page-total'),
  CURRENT: '[aria-current="page"]'
};
