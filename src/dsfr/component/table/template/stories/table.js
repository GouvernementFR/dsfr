import ejsRenderer from '../../../../renderer.js';
const renderTable = (data) => ejsRenderer.render('table-wrapper', data);
export { renderTable };
