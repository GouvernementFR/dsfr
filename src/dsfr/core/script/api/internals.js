import state from './state.js';
import engine from './engine.js';
import options from './options/options.js';
import dom from './utilities/dom/index';
import image from './utilities/image/index';
import ns from './utilities/namespace.js';
import support from './utilities/support/index';
import motion from './utilities/motion/index';
import property from './utilities/property/index';
import searchParams from './utilities/search-params/index.js';

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
internals.image = image;
internals.support = support;
internals.motion = motion;
internals.property = property;
internals.ns = ns;
internals.register = engine.register;
internals.state = state;
internals.query = searchParams(window.location);

Object.defineProperty(internals, 'preventManipulation', {
  get: () => options.preventManipulation
});
Object.defineProperty(internals, 'stage', {
  get: () => state.getModule('stage')
});

export default internals;
