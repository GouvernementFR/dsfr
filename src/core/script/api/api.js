import state from './state.js';
import options, { Modes } from './options/options.js';
import config from '../../config.js';
import engine from './engine.js';
import inspector from './inspect/inspector.js';
import ns from './utilities/namespace.js';
import { addClass, hasClass, removeClass } from './utilities/classes.js';
import { queryParentSelector, querySelectorAllArray } from './utilities/query-selector.js';

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

Object.defineProperty(api, 'preventManipulation', {
  get: () => options.preventManipulation
});

Object.defineProperty(api, 'isLegacy', {
  get: () => state.isLegacy
});

api.setLegacy = () => {
  state.isLegacy = true;
};

api.ns = ns;
api.addClass = addClass;
api.hasClass = hasClass;
api.removeClass = removeClass;
api.queryParentSelector = queryParentSelector;
api.querySelectorAllArray = querySelectorAllArray;

api.start = engine.start;
api.stop = engine.stop;
api.register = engine.register;

api.inspector = inspector;

options.configure(window[config.namespace], api.start);

window[config.namespace] = api;
export default api;
