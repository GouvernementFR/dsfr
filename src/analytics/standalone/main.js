import api from '../api.js';
import ns from '../../core/script/api/utilities/namespace';
import { completeAssign } from '../../core/script/api/utilities/property/complete-assign';
import analytics from '../script/analytics/analytics';

api.internals = {
  ns: ns
};

api.analytics = completeAssign(analytics, {});

export default api;
