import api from '../../../../api';
import { AlertSelector } from './alert-selector';
import { AlertActionee } from './alert-actionee';
import { joinSelector } from '../../join-selector';

const integrateAlert = (selector = '') => {
  api.internals.register(joinSelector(AlertSelector.ALERT, selector), AlertActionee);
};

export default integrateAlert;
