import api from '../../../../api';

export const FooterSelector = {
  FOOTER: `${api.internals.ns.selector('footer')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  FOOTER_LINKS: `${api.internals.ns.selector('footer')} a[href]:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')}), ${api.internals.ns.selector('footer')} button:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
