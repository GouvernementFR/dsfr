import api from '../../api.js';

export const ModalSelector = {
  MODAL: api.internals.ns.selector('modal'),
  SCROLL_SHADOW: api.internals.ns.selector('scroll-shadow'),
  BODY: api.internals.ns.selector('modal__body')
};
