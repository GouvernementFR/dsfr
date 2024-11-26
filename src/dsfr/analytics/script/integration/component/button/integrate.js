import api from '../../../../api';
import { ButtonSelector } from './button-selector';
import { ButtonActionee } from './button-actionee';

const integrateButton = () => {
  api.internals.register(ButtonSelector.BUTTON, ButtonActionee);
};

export default integrateButton;
