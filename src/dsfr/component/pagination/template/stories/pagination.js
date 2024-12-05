import ejsRenderer from '../../../../renderer.js';
const renderPagination = (data) => ejsRenderer.render('pagination', data);
export { renderPagination };
