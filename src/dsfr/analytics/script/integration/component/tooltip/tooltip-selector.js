import api from '../../../../api';

export const TooltipSelector = {
  INPUT: `${api.tooltip.TooltipSelector.TOOLTIP}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
