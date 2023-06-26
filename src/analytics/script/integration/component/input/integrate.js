import api from '../../../../api';
import { InputSelector } from './input-selector';
import { InputActionee } from './input-actionee';

const integrateInput = () => {
  api.internals.register(InputSelector.INPUT, InputActionee);
};

export default integrateInput;
