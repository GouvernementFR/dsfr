import api from '../../../../api';

export const SearchSelector = {
  SEARCH_BAR: `${api.internals.ns.selector('search-bar')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
