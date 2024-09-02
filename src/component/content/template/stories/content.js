import ejsRenderer from '../../../../renderer.js';
const renderContent = (data) => ejsRenderer.render('content-media', data);

export { renderContent };
