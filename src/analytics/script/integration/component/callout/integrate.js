import api from '../../../../api';
import { CalloutSelector } from './callout-selector';
import { CalloutActionee } from './callout-actionee';

const integrateCallout = () => {
  api.internals.register(CalloutSelector.CALLOUT, CalloutActionee);
};

export default integrateCallout;
