import api from '../../../../api';
import { SelectSelector } from './select-selector';
import { SelectActionee } from './select-actionee';
import { joinSelector } from '../../join-selector';

const integrateSelect = (selector = '') => {
  api.internals.register(joinSelector(SelectSelector.SELECT, selector), SelectActionee);
};

export default integrateSelect;
