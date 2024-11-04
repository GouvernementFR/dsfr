import api from '../../../../api';
import { SearchSelector } from './search-selector';
import { SearchActionee } from './search-actionee';
import { joinSelector } from '../../join-selector';

const integrateSearch = (selector = '') => {
  api.internals.register(joinSelector(SearchSelector.SEARCH_BAR, selector), SearchActionee);
};

export default integrateSearch;
