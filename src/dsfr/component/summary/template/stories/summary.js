import ejsRenderer from '../../../../renderer.js';
const renderSummary = (data) => ejsRenderer.render('summary', data);

export { renderSummary };
