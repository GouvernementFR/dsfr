import api from '../../../../api';
import { BreadcrumbSelector } from './breadcrumb-selector';
import { BreadcrumbActionee } from './breadcrumb-actionee';
import { BreadcrumbLinkActionee } from './breadcrumb-link-actionee';

const integrateBreadcrumb = () => {
  if (api.breadcrumb) {
    api.internals.register(BreadcrumbSelector.COLLAPSE, BreadcrumbActionee);
    api.internals.register(BreadcrumbSelector.LINK, BreadcrumbLinkActionee);
  }
};

export default integrateBreadcrumb;
