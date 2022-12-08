import api from '../../api.js';

export const HorizontalSelector = {
  LEFT: api.internals.ns.selector('place--left'),
  MIDDLE: api.internals.ns.selector('place--middle'),
  RIGHT: api.internals.ns.selector('place--right')
};
