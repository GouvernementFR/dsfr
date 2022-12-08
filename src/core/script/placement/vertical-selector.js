import api from '../../api.js';

export const VerticalSelector = {
  TOP: api.internals.ns.selector('place--top'),
  CENTER: api.internals.ns.selector('place--center'),
  BOTTOM: api.internals.ns.selector('place--bottom')
};
