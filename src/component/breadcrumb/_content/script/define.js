import api from '../api.js';
import { Breadcrumb } from './breadcrumb/breadcrumb.js';
import { BreadcrumbSelector } from './breadcrumb/breadcrumb-selector.js';

api.breadcrumb = {
  BreadcrumbSelector: BreadcrumbSelector,
  Breadcrumb: Breadcrumb
};

export default api;
