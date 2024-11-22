import api from './api.js';
import { Breadcrumb } from './script/breadcrumb/breadcrumb.js';
import { BreadcrumbSelector } from './script/breadcrumb/breadcrumb-selector.js';

api.breadcrumb = {
  BreadcrumbSelector: BreadcrumbSelector,
  Breadcrumb: Breadcrumb
};

export default api;
