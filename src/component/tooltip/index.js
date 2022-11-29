import api from './api.js';
import { Tooltip } from './script/tooltip/tooltip.js';
import { TooltipSelector } from './script/tooltip/tooltip-selector.js';

api.tooltip = {
  Tooltip: Tooltip,
  TooltipSelector: TooltipSelector
};

export default api;
