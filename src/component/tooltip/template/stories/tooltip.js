import { EJSRenderer } from '../../../../core/template/storybook/ejs-renderer';
import tooltip from '../ejs/tooltip.ejs?raw';

const ejsRenderer = new EJSRenderer();
ejsRenderer.add(['tooltip'], tooltip);

const renderTooltip = (data) => ejsRenderer.render('tooltip.ejs', data);

export { renderTooltip, ejsRenderer as tooltipEJSRenderer };
