import api from '../../../../api';
import { RadioSelector } from './radio-selector';
import { RadioActionee } from './radio-actionee';

const integrateRadio = () => {
  api.internals.register(RadioSelector.INPUT, RadioActionee);
};

export default integrateRadio;
