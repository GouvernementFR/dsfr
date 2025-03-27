import ejsRenderer from '../../../../renderer.js';

const renderButton = (data) => {
  return ejsRenderer.render('button', data);
};

const renderButtonsGroup = (data) => ejsRenderer.render('buttons-group', data);

export { renderButton, renderButtonsGroup };
