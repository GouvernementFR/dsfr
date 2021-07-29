import api from './api.js';

import { Modal } from './scripts/modal/modal.js';
import { ModalButton } from './scripts/modal/modal-button.js';
import { ModalsGroup } from './scripts/modal/modals-group.js';
import { ModalBody } from './scripts/modal/modal-body.js';
import { ModalSelectors } from './scripts/modal/modal-selectors.js';

api.modal = {
  Modal: Modal,
  ModalButton: ModalButton,
  ModalBody: ModalBody,
  ModalsGroup: ModalsGroup,
  ModalSelectors: ModalSelectors
};

export default api;
