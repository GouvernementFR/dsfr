import api from '../../../../api';
import { CheckboxSelector } from './checkbox-selector';
import { CheckboxActionee } from './checkbox-actionee';
import { joinSelector } from '../../join-selector';

const integrateCheckbox = (selector = '') => {
  api.internals.register(joinSelector(CheckboxSelector.INPUT, selector), CheckboxActionee);
};

export default integrateCheckbox;
