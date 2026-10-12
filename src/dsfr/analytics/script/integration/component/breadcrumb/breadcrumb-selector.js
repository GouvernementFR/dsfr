import api from '../../../../api';

export const BreadcrumbSelector = {
  LINK: `${api.internals.ns.selector('breadcrumb__link')}:not([aria-current]):not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  COLLAPSE: `${api.internals.ns.selector('breadcrumb')} ${api.internals.ns.selector('collapse')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
