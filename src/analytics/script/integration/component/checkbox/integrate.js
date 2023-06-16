import api from '../../../../api';
import { CheckboxSelector } from './checkbox-selector';
import { CheckboxActionee } from './checkbox-actionee';

const integrateCheckbox = () => {
  api.internals.register(CheckboxSelector.INPUT, CheckboxActionee);
};

export default integrateCheckbox;
