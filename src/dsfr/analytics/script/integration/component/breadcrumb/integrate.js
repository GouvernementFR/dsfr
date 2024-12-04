import api from '../../../../api';
import { BreadcrumbSelector } from './breadcrumb-selector';
import { BreadcrumbActionee } from './breadcrumb-actionee';
import { BreadcrumbLinkActionee } from './breadcrumb-link-actionee';
import { joinSelector } from '../../join-selector';

const integrateBreadcrumb = (selector = '') => {
  if (api.breadcrumb) {
    api.internals.register(joinSelector(BreadcrumbSelector.COLLAPSE, selector), BreadcrumbActionee);
    api.internals.register(joinSelector(BreadcrumbSelector.LINK, selector), BreadcrumbLinkActionee);
  }
};

export default integrateBreadcrumb;
