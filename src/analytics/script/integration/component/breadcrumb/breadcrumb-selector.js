import api from '../../../../api';

export const BreadcrumbSelector = {
  LINK: api.internals.ns.selector('breadcrumb__link'),
  COLLAPSE: `${api.internals.ns.selector('breadcrumb')} ${api.internals.ns.selector('collapse')}`
};
