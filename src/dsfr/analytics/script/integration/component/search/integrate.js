import api from '../../../../api';
import { SearchSelector } from './search-selector';
import { SearchActionee } from './search-actionee';

const integrateSearch = () => {
  api.internals.register(SearchSelector.SEARCH_BAR, SearchActionee);
};

export default integrateSearch;
