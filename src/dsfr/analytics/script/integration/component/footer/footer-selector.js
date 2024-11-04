import api from '../../../../api';

export const FooterSelector = {
  FOOTER: api.internals.ns.selector('footer'),
  FOOTER_LINKS: `${api.internals.ns.selector('footer')} a[href], ${api.internals.ns.selector('footer')} button`
};
