import api from './api.js';
import analytics from './script/analytics/analytics';
import { completeAssign } from '../core/script/api/utilities/property/complete-assign';

api.analytics = completeAssign(analytics, {});

export default api;
