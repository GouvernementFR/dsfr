import ejsRenderer from '../../../../renderer.js';
const renderMessage = (data) => ejsRenderer.render('message', data);

export { renderMessage };
