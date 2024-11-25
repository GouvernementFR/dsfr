import api from './api.js';
import { completeAssign } from '../../core/script/api/utilities/property/complete-assign';
import analytics from '../script/analytics/analytics';

api.analytics = completeAssign(analytics, {});

export default api;
