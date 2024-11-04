import api from '../../../../api';
import { AlertSelector } from './alert-selector';
import { AlertActionee } from './alert-actionee';

const integrateAlert = () => {
  api.internals.register(AlertSelector.ALERT, AlertActionee);
};

export default integrateAlert;
