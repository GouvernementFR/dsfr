import ejsRenderer from '../../../../renderer.js';

const renderBadge = (data) => ejsRenderer.render('badge.ejs', data);

const renderBadgesGroup = (data) => ejsRenderer.render('badges-group.ejs', data);

export { renderBadge, renderBadgesGroup };
