import api from '../../../../api.js';

export const PaginationSelector = {
  PAGINATION: api.internals.ns.selector('pagination'),
  LINK: api.internals.ns.selector('pagination__link'),
  NEXT_LINK: api.internals.ns.selector('pagination__link--next'),
  LAST_LINK: api.internals.ns.selector('pagination__link--last'),
  ANALYTICS_TOTAL: api.internals.ns.attr('analytics-page-total'),
  CURRENT: '[aria-current="page"]'
};
