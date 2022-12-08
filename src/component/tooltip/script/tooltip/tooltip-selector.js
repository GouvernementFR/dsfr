import api from '../../api.js';

export const TooltipSelector = {
  TOOLTIP: api.internals.ns.selector('tooltip'),
  SHOWN: api.internals.ns.selector('tooltip--shown'),
  BUTTON: api.internals.ns.selector('btn--tooltip')
};
