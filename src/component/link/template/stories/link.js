import ejsRenderer from '../../../../renderer.js';
const renderLink = (data) => ejsRenderer.render('link', data);

const renderLinksGroup = (data) => ejsRenderer.render('links-group', data);

export { renderLink, renderLinksGroup };
