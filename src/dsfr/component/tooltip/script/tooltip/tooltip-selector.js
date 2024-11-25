import api from '../../api.js';

export const TooltipSelector = {
  TOOLTIP: api.internals.ns.selector('tooltip'),
  SHOWN: api.internals.ns.selector('tooltip--shown'),
  HIDDING: api.internals.ns.selector('tooltip--hidding'),
  BUTTON: api.internals.ns.selector('btn--tooltip')
};
