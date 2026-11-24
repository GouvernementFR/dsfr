import api from '../../../../api';
import { Search } from '../../collector/provider/search';
import { validateString, validateNumber } from '../../utils/type-validator';

const hasValue = value => value !== undefined && value !== null && value !== '';

class MatomoSearch extends Search {
  get layer () {
    const layer = {};
    const keyword = validateString(this._config.keyword, 'context.search.keyword');

    if (!keyword) {
      if (hasValue(this._config.category) || hasValue(this._config.results)) api.inspector.warn('analytics.search.keyword is required and must not be empty');
      return layer;
    }

    layer.keyword = keyword;

    const category = validateString(this._config.category, 'context.search.category');
    if (category) layer.category = category;

    const results = validateNumber(this._config.results, 'context.search.results');
    if (results > -1) layer.results = results;

    return layer;
  }
}

export default MatomoSearch;
