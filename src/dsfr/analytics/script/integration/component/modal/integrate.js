import api from '../../../../api';
import { ModalActionee } from './modal-actionee';
import { joinSelector } from '../../join-selector';
import { ModalSelector } from './modal-selector';

const integrateModal = (selector = '') => {
  if (api.modal) {
    api.internals.register(joinSelector(ModalSelector.MODAL, selector), ModalActionee);
  }
};

export default integrateModal;
