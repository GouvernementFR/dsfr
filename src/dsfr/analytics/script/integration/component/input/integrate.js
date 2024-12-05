import api from '../../../../api';
import { InputSelector } from './input-selector';
import { InputActionee } from './input-actionee';
import { joinSelector } from '../../join-selector';

const integrateInput = (selector = '') => {
  api.internals.register(joinSelector(InputSelector.INPUT, selector), InputActionee);
};

export default integrateInput;
