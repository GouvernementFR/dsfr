import { BREADCRUMB_COLLAPSE_SELECTOR } from './constants';
import { Breadcrumb } from './breadcrumb';

const build = () => {
  const breadcrumbs = [];
  const breadcrumbNodes = document.querySelectorAll(BREADCRUMB_COLLAPSE_SELECTOR);
  for (let i = 0; i < breadcrumbNodes.length; i++) breadcrumbs.push(new Breadcrumb(breadcrumbNodes[i]));
};

export default build;
