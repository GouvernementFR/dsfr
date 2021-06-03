import api from './index.js';
import { COLLAPSE_SELECTOR } from './scripts/collapse/constants';

if (api.verbose === true) api.inspector.level = 0;
api.engine.starter.setMode(api.startMode || 'auto');

api.register(COLLAPSE_SELECTOR, api.core.Collapse);

export default api;
