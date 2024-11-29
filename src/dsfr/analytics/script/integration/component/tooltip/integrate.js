import api from '../../../../api';
import { TooltipActionee } from './tooltip-actionee';
import { joinSelector } from '../../join-selector';

const integrateTooltip = (selector = '') => {
  if (api.tooltip) {
    api.internals.register(joinSelector(api.tooltip.TooltipSelector.TOOLTIP, selector), TooltipActionee);
  }
};

export default integrateTooltip;
