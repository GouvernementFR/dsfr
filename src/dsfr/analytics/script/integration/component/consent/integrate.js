import api from '../../../../api';
import { ConsentSelector } from './consent-selector';
import { ConsentActionee } from './consent-actionee';

const integrateConsent = () => {
  api.internals.register(ConsentSelector.BANNER, ConsentActionee);
};

export default integrateConsent;
