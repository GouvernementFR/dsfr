import { namespace } from './config.js';

const api = window[namespace] || {};
window[namespace] = api;
export default api;
