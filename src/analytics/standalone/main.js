import api from '../api.js';
import ns from '../../core/script/api/utilities/namespace';
import analytics from '../script/analytics/analytics';

api.internals = {
  ns: ns
};

api.analytics = {
  ...analytics
};

export default api;
