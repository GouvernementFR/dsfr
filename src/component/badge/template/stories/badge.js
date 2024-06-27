import { tooltipEJSRenderer as badgeEJSRenderer } from '../../../tooltip/template/stories/tooltip.js';
import badge from '../ejs/badge.ejs?raw';
import badgesGroup from '../ejs/badges-group.ejs?raw';

badgeEJSRenderer.add(['badge'], badge);
badgeEJSRenderer.add(['badges-group'], badgesGroup);

const renderBadge = (data) => badgeEJSRenderer.render('badge.ejs', data);

const renderBadgesGroup = (data) => badgeEJSRenderer.render('badges-group.ejs', data);

export { renderBadge, renderBadgesGroup, badgeEJSRenderer };
