import api from '../../../../api';
import { ConsentSelector } from './consent-selector';
import { ConsentActionee } from './consent-actionee';
import { joinSelector } from '../../join-selector';

const integrateConsent = (selector = '') => {
  api.internals.register(joinSelector(ConsentSelector.BANNER, selector), ConsentActionee);
};

export default integrateConsent;
