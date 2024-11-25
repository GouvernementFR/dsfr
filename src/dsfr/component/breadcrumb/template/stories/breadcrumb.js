import ejsRenderer from '../../../../renderer.js';
const renderBreadcrumb = (data) => ejsRenderer.render('breadcrumb', data);

const renderBreadcrumbsGroup = (data) => ejsRenderer.render('breadcrumbs-group', data);

export { renderBreadcrumb, renderBreadcrumbsGroup };
