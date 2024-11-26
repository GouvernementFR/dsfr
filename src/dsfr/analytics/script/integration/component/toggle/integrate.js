import api from '../../../../api';
import { ToggleSelector } from './toggle-selector';
import { ToggleActionee } from './toggle-actionee';

const integrateToggle = () => {
  api.internals.register(ToggleSelector.INPUT, ToggleActionee);
};

export default integrateToggle;
