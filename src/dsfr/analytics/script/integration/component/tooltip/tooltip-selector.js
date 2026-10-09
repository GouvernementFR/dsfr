import api from '../../../../api';
import { joinSelector } from '../../join-selector';

export const TooltipSelector = {
  get INPUT () {
    return joinSelector(api.tooltip.TooltipSelector.TOOLTIP, `:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`);
  }
};
