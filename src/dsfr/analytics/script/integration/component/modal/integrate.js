import api from '../../../../api';
import { ModalActionee } from './modal-actionee';
import { joinSelector } from '../../join-selector';

const integrateModal = (selector = '') => {
  if (api.modal) {
    api.internals.register(joinSelector(api.modal.ModalSelector.MODAL, selector), ModalActionee);
  }
};

export default integrateModal;
