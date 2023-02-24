import api from '../../../../api';

export const FooterSelector = {
  FOOTER: api.internals.ns.selector('footer'),
  FOOTER_LINKS: `${api.internals.ns.selector('footer__content-link')}, ${api.internals.ns.selector('footer__bottom-link')}, ${api.internals.ns.selector('footer__top-link')}, ${api.internals.ns.selector('footer__partners-link')}`
};
