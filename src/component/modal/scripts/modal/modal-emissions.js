import api from '../../api.js';

export const ModalEmissions = {
  ACTIVATE: api.ns.emission('modal', 'activate'),
  DEACTIVATE: api.ns.emission('modal', 'deactivate')
};
