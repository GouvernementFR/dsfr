import api from '../../api.js';

export const HorizontalSelector = {
  LEFT: api.internals.ns.selector('placement--left'),
  MIDDLE: api.internals.ns.selector('placement--middle'),
  RIGHT: api.internals.ns.selector('placement--right')
};
