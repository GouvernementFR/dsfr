import { tooltipEJSRenderer as buttonEJSRenderer } from '../../../tooltip/template/stories/tooltip.js';
import button from '../ejs/button.ejs?raw';

buttonEJSRenderer.add(['button'], button);

const renderButton = (data) => buttonEJSRenderer.render('button.ejs', data);

export { renderButton, buttonEJSRenderer };
