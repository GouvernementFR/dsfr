import api from '../../../../../core/api.js';
import { joinSelector } from '../../join-selector';

export const ModalSelector = {
  get MODAL () {
    return joinSelector(api.modal.ModalSelector.MODAL, `:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`);
  },
  TITLE: api.internals.ns.selector('modal__title')
};
