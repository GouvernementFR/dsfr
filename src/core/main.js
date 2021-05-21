import api from './index.js';
import engine from './scripts/engine/engine.js';
import { register } from './scripts/engine/element/registration';
import { COLLAPSE_CLASS } from './scripts/collapse/constants';
import inspector from './scripts/inspect/inspector';

api.inspector = inspector;
if (api.verbose === true) api.inspector.level = 0;
api.next = engine.next;
api.start = engine.start;
api.stop = engine.stop;
api.register = register;
engine._starter.setMode(api.startMode || 'auto');

api.register(`.${COLLAPSE_CLASS}`, api.core.Collapse);

export default api;
