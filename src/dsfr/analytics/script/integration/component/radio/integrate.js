import api from '../../../../api';
import { RadioSelector } from './radio-selector';
import { RadioActionee } from './radio-actionee';
import { joinSelector } from '../../join-selector';

const integrateRadio = (selector = '') => {
  api.internals.register(joinSelector(RadioSelector.INPUT, selector), RadioActionee);
};

export default integrateRadio;
