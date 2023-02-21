import api from '../../../../api';

export const SearchSelector = {
  SEARCH: `${api.internals.ns.selector('search-bar')} > ${api.internals.ns.selector('btn')}`
};
