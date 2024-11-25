import api from './index.js';
import integration from './script/integration/integration';

api.analytics.readiness.then(() => integration(), () => {});

export default api;
