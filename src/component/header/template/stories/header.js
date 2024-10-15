import ejsRenderer from '../../../../renderer.js';
const renderHeader = (data) => ejsRenderer.render('header', data);

export { renderHeader };
