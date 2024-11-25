import ejsRenderer from '../../../../renderer.js';
const renderQuote = (data) => ejsRenderer.render('quote', data);

export { renderQuote };
