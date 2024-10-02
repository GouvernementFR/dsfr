import api from './api.js';
import { Tooltip } from './script/tooltip/tooltip.js';
import { TooltipSelector } from './script/tooltip/tooltip-selector.js';
import { TooltipEvent } from './script/tooltip/tooltip-event';

api.tooltip = {
  Tooltip: Tooltip,
  TooltipSelector: TooltipSelector,
  TooltipEvent: TooltipEvent
};

export default api;
