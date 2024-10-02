import api from '../../../../api';
import { ModalActionee } from './modal-actionee';

const integrateModal = () => {
  if (api.modal) {
    api.internals.register(api.modal.ModalSelector.MODAL, ModalActionee);
  }
};

export default integrateModal;
