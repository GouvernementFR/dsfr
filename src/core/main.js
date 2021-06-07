import api from './index.js';
import { COLLAPSE_SELECTOR } from './scripts/collapse/constants';

api.register(COLLAPSE_SELECTOR, api.core.Collapse);

export default api;
