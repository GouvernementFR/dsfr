import api from '../../../../api';
import { SelectSelector } from './select-selector';
import { SelectActionee } from './select-actionee';

const integrateSelect = () => {
  api.internals.register(SelectSelector.SELECT, SelectActionee);
};

export default integrateSelect;
