import state from './state.js';
import engine from './engine.js';
import options from './options/options.js';
import dom from './utilities/dom/index';
import ns from './utilities/namespace.js';
import support from './utilities/support/index';
import property from './utilities/property/index';

const internals = {};
const legacy = {};

Object.defineProperty(legacy, 'isLegacy', {
  get: () => state.isLegacy
});

legacy.setLegacy = () => {
  state.isLegacy = true;
};

internals.legacy = legacy;
internals.dom = dom;
internals.support = support;
internals.property = property;
internals.ns = ns;
internals.register = engine.register;

Object.defineProperty(internals, 'preventManipulation', {
  get: () => options.preventManipulation
});

export default internals;
