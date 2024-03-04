import state from './state.js';
import options from './options/options.js';
import { Modes } from './options/modes.js';
import config from '../../config.js';
import engine from './engine.js';
import inspector from './inspect/inspector.js';
import colors from './utilities/colors/colors.js';
import internals from './internals.js';

const api = (node) => {
  const stage = state.getModule('stage');
  return stage.getProxy(node);
};

api.version = config.version;
api.prefix = config.prefix;
api.organisation = config.organisation;
api.Modes = Modes;

Object.defineProperty(api, 'mode', {
  set: (value) => { options.mode = value; },
  get: () => options.mode
});

api.internals = internals;
api.version = config.version;

api.start = engine.start;
api.stop = engine.stop;

api.inspector = inspector;
api.colors = colors;

const configuration = window[config.namespace];
api.internals.configuration = configuration;

options.configure(configuration, api.start, api.internals.query);

window[config.namespace] = api;
export default api;
