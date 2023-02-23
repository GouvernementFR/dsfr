import api from '../../../../api';

export const FooterSelector = {
  FOOTER: api.internals.ns.selector('footer'),
  CONTENT_LINK: `${api.internals.ns.selector('footer__content-link')}`,
  BOTTOM_LINK: `${api.internals.ns.selector('footer__bottom-link')}`,
  TOP_LINK: `${api.internals.ns.selector('footer__top-link')}`,
  PARTNER_LINK: `${api.internals.ns.selector('footer__partners-link')}`
};
