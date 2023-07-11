import api from '../../api.js';

export const ModalSelector = {
  MODAL: api.internals.ns.selector('modal'),
  SCROLL_DIVIDER: api.internals.ns.selector('scroll-divider'),
  BODY: api.internals.ns.selector('modal__body'),
  TITLE: api.internals.ns.selector('modal__title')
};
