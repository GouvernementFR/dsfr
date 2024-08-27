import ejsRenderer from '../../../../renderer.js';
const renderTranslate = (data) => ejsRenderer.render('translate', data);

const renderLanguages = (data) => {
  console.log('data', data);
  return ejsRenderer.render('languages', data);
};

export { renderTranslate, renderLanguages };
