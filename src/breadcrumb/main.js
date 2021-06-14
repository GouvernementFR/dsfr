import api from './index.js';
import { BREADCRUMB_SELECTOR } from './scripts/breadcrumb/constants';

api.register(BREADCRUMB_SELECTOR, api.breadcrumb.Breadcrumb);

export default api;
