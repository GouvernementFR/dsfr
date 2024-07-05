import ejsRenderer from '../../../../renderer.js';
const renderCallout = (data) => ejsRenderer.render('callout', data);

const renderCalloutsGroup = (data) => ejsRenderer.render('callouts-group', data);

export { renderCallout, renderCalloutsGroup };
