import api from '../../../../api';
import { TooltipActionee } from './tooltip-actionee';
import { joinSelector } from '../../join-selector';
import { TooltipSelector } from './tooltip-selector';

const integrateTooltip = (selector = '') => {
  if (api.tooltip) {
    api.internals.register(joinSelector(TooltipSelector.INPUT, selector), TooltipActionee);
  }
};

export default integrateTooltip;
