import api from '../../../../api';
import { ToggleSelector } from './toggle-selector';
import { ToggleActionee } from './toggle-actionee';
import { joinSelector } from '../../join-selector';

const integrateToggle = (selector = '') => {
  api.internals.register(joinSelector(ToggleSelector.INPUT, selector), ToggleActionee);
};

export default integrateToggle;
