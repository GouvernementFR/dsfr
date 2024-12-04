import api from '../../../../api';
import { CalloutSelector } from './callout-selector';
import { CalloutActionee } from './callout-actionee';
import { joinSelector } from '../../join-selector';

const integrateCallout = (selector = '') => {
  api.internals.register(joinSelector(CalloutSelector.CALLOUT, selector), CalloutActionee);
};

export default integrateCallout;
