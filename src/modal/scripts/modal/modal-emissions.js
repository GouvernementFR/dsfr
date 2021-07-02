import api from '../../api.js';

export const ModalEmissions = {
  ACTIVATE: api.ns.event('ACTIVATE_MODAL_BODY_EMISSION'),
  DEACTIVATE: api.ns.event('DEACTIVATE_MODAL_BODY_EMISSION')
}
