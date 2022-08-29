import api from './define';

api.internals.register(api.header.HeaderSelector.BUTTONS, api.header.HeaderLinks);
api.internals.register(api.modal.ModalSelector.MODAL, api.modal.Modal);
api.internals.register(api.modal.ModalSelector.BODY, api.modal.ModalBody);
api.internals.register(api.core.RootSelector.ROOT, api.modal.ModalsGroup);

export default api;
