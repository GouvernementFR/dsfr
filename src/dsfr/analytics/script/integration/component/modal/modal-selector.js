import api from '../../../../../core/api.js';

export const ModalSelector = {
  MODAL: `${api.modal.ModalSelector.MODAL}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  TITLE: api.internals.ns.selector('modal__title')
};
