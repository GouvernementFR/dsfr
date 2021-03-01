import { namespace } from './generated/scripts/config.js';

const api = window[namespace] || {};
window[namespace] = api;
export default api;
