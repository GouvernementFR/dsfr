import ejsRenderer from '../../../../renderer.js';
const renderToggle = (data) => ejsRenderer.render('toggle', data);
const renderToggleGroup = (data) => ejsRenderer.render('toggle-group', data);

export { renderToggle, renderToggleGroup };
