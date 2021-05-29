import api from './index.js';
import { Engine } from './scripts/engine/engine.js';
import { COLLAPSE_CLASS } from './scripts/collapse/constants';
import inspector from './scripts/inspect/inspector';

api.inspector = inspector;
if (api.verbose === true) api.inspector.level = 0;
const engine = new Engine();
api.start = engine.start;
api.stop = engine.stop;
api.register = engine.register;
engine._starter.setMode(api.startMode || 'auto');

api.register(`.${COLLAPSE_CLASS}`, api.core.Collapse);

export default api;
