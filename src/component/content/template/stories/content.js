import ejsRenderer from '../../../../renderer.js';
const renderContent = (data) => ejsRenderer.render('content', data);

export { renderContent };
