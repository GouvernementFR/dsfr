import { linkEJSRenderer as buttonEJSRenderer } from '../../../link/template/stories/link.js';
import button from '../ejs/button.ejs?raw';
import buttonsGroup from '../ejs/buttons-group.ejs?raw';

buttonEJSRenderer.add(['button'], button);
buttonEJSRenderer.add(['buttons-group'], buttonsGroup);

const renderButton = (data) => buttonEJSRenderer.render('button.ejs', data);

const renderButtonsGroup = (data) => buttonEJSRenderer.render('buttons-group.ejs', data);

export { renderButton, renderButtonsGroup, buttonEJSRenderer };
