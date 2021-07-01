import api from './api.js';

import { Modal } from './scripts/modal/modal';
import { ModalButton } from './scripts/modal/modal-button';
import { ModalsGroup } from './scripts/modal/modals-group';
import { ModalBody } from './scripts/modal/modal-body';
import { ModalSelectors } from './scripts/modal/modal-selectors';

api.modal = {
  Modal: Modal,
  ModalButton: ModalButton,
  ModalBody: ModalBody,
  ModalsGroup: ModalsGroup,
  ModalSelectors: ModalSelectors
};

export default api;
