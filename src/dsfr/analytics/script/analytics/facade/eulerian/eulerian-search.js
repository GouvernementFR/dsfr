import api from '../../../../api';
import { Search } from '../../collector/provider/search';
import { validateString, validateNumber } from '../../utils/type-validator';
import normalize from '../../utils/normalize';

const ENGINE_NAME = /^[a-z0-9_-]+$/;

const hasValue = value => value !== undefined && value !== null && value !== '';

class EulerianSearch extends Search {
  get layer () {
    const data = [];
    const engine = validateString(this._config.engine, 'context.search.engine');

    if (!engine) {
      const hasOthers = Object.entries(this._config).some(([key, value]) => key !== 'engine' && hasValue(value));
      if (hasOthers) api.inspector.warn('analytics.search.engine is required and must not be empty');
      return data;
    }

    if (!ENGINE_NAME.test(engine)) api.inspector.warn(`analytics.search.engine '${engine}' should be lowercase, without spaces, accents or special characters, and match the name declared in Eulerian`);
    data.push('isearchengine', normalize(engine));

    const results = validateNumber(this._config.results, 'context.search.results');
    if (results > -1) data.push('isearchresults', results);

    Object.entries(this._config).forEach(([key, value]) => {
      if (key === 'engine' || key === 'results') return;
      const valid = validateString(value, `context.search.${key}`);
      if (valid !== null && valid !== '') data.push('isearchkey', key, 'isearchdata', normalize(valid));
    });

    return data;
  }
}

export default EulerianSearch;
