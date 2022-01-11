import state from './state.js';
import options, { Modes } from './options/options.js';
import config from '../../config.js';
import engine from './engine.js';
import inspector from './inspect/inspector.js';
import internals from './internals.js';

inspector.info(`version ${config.version}`);

const api = (node) => {
  const stage = state.getModule('stage');
  return stage.getProxy(node);
};

api.Modes = Modes;

Object.defineProperty(api, 'mode', {
  set: (value) => { options.mode = value; },
  get: () => options.mode
});

api.internals = internals;

api.start = engine.start;
api.stop = engine.stop;

api.inspector = inspector;

options.configure(window[config.namespace], api.start);

window[config.namespace] = api;
export default api;
