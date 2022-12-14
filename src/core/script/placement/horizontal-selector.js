import api from '../../api.js';

export const HorizontalSelector = {
  LEFT: api.internals.ns.selector('placement--left'),
  CENTER: api.internals.ns.selector('placement--center'),
  RIGHT: api.internals.ns.selector('placement--right')
};
