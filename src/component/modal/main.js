import api from './index.js';

api.register(api.modal.ModalSelector.MODAL, api.modal.Modal);
api.register(api.modal.ModalSelector.BODY, api.modal.ModalBody);
api.register(api.core.RootSelector.ROOT, api.modal.ModalsGroup);

export default api;
