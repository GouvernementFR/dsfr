import api from '../../../../api';
import { ButtonSelector } from './button-selector';
import { ButtonActionee } from './button-actionee';
import { joinSelector } from '../../join-selector';

const integrateButton = (selector = '') => {
  api.internals.register(joinSelector(ButtonSelector.BUTTON, selector), ButtonActionee);
};

export default integrateButton;
