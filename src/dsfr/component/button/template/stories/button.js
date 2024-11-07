import ejsRenderer from '../../../../renderer.js';

const renderButton = (data) => {
  console.log('button', data.button);
  return ejsRenderer.render('button', data);
};

const renderButtonsGroup = (data) => ejsRenderer.render('buttons-group', data);

export { renderButton, renderButtonsGroup };
