import api from '../../api.js';

export const VerticalSelector = {
  TOP: api.internals.ns.selector('placement--top'),
  CENTER: api.internals.ns.selector('placement--center'),
  BOTTOM: api.internals.ns.selector('placement--bottom')
};
