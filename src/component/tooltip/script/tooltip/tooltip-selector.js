import api from '../../api.js';

export const TooltipSelector = {
  TOOLTIP: api.internals.ns.selector('tooltip'),
  BOTTOM: api.internals.ns.selector('tooltip--bottom'),
  LEFT: api.internals.ns.selector('tooltip--left'),
  RIGHT: api.internals.ns.selector('tooltip--right'),
  SHOWN: api.internals.ns.selector('tooltip--shown'),
  BUTTON: api.internals.ns.selector('btn--tooltip')
};
