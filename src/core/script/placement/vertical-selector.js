import api from '../../api.js';

export const VerticalSelector = {
  TOP: api.internals.ns.selector('placement--top'),
  MIDDLE: api.internals.ns.selector('placement--middle'),
  BOTTOM: api.internals.ns.selector('placement--bottom')
};
