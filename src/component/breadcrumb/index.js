import api from './api.js';
import { Breadcrumb } from './scripts/breadcrumb/breadcrumb.js';
import { BreadcrumbSelectors } from './scripts/breadcrumb/breadcrumb-selectors.js';

api.breadcrumb = {
  BreadcrumbSelectors: BreadcrumbSelectors,
  Breadcrumb: Breadcrumb
};

export default api;
