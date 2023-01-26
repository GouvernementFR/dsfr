import api from '../../api.js';
import { completeAssign } from '../../../core/script/api/utilities/property/complete-assign';

if (!api.inspector) api.inspector = completeAssign(console, {});

export default api;
