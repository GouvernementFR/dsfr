import { tooltipEJSRenderer as linkEJSRenderer } from '../../../tooltip/template/stories/tooltip.js';
import link from '../ejs/link.ejs?raw';
import linksGroup from '../ejs/links-group.ejs?raw';

linkEJSRenderer.add(['link'], link);
linkEJSRenderer.add(['links-group'], linksGroup);

const renderLink = (data) => linkEJSRenderer.render('link.ejs', data);

const renderLinksGroup = (data) => linkEJSRenderer.render('links-group.ejs', data);

export { renderLink, renderLinksGroup, linkEJSRenderer };
