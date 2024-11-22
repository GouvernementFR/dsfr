import api from '../../../../api';
import { TooltipActionee } from './tooltip-actionee';

const integrateTooltip = () => {
  if (api.tooltip) {
    api.internals.register(api.tooltip.TooltipSelector.TOOLTIP, TooltipActionee);
  }
};

export default integrateTooltip;
