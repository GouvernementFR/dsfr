import api from './index.js';
import integration from './script/integration/integration';
api.analytics.readiness.then(() => {
  const selector = api.analytics._collector.isActionReduced ? api.internals.ns.attr.selector('analytics-action') : '';
  integration(selector);
}, () => {});

export default api;
