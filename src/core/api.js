import { namespace } from './config.js';

const api = window[namespace] || { core: {} };
window[namespace] = api;
export default api;
