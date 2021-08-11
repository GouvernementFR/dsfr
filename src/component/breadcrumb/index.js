import api from './api.js';
import { Breadcrumb } from './script/breadcrumb/breadcrumb.js';
import { BreadcrumbSelectors } from './script/breadcrumb/breadcrumb-selectors.js';

api.breadcrumb = {
  BreadcrumbSelectors: BreadcrumbSelectors,
  Breadcrumb: Breadcrumb
};

export default api;
