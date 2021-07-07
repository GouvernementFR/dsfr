import state from './engine/state.js';
import options, { Modes } from './engine/options/options.js';
import engine from './engine/engine';
import inspector from './engine/inspect/inspector';
import { namespace } from '../config.js';
import { ns } from './global/namespace';
import { addClass, hasClass, removeClass } from './global/classes';

const api = (node) => {
  const stage = state.getModule('stage');
  return stage.getProxy(node);
};

options.configure(window[namespace]);

api.Modes = Modes;

Object.defineProperty(api, 'mode', {
  set: (value) => { options.mode = value; },
  get: () => options.mode
});

Object.defineProperty(api, 'preventManipulation', {
  get: () => options.preventManipulation
});

api.ns = ns;
api.addClass = addClass;
api.hasClass = hasClass;
api.removeClass = removeClass;

api.start = engine.start;
api.stop = engine.stop;
api.register = engine.register;

api.inspector = inspector;

window[namespace] = api;
