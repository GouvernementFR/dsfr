import ejsRenderer from '../../../../renderer.js';
const renderAccordion = (data) => ejsRenderer.render('accordion', data);

const renderAccordionsGroup = (data) => ejsRenderer.render('accordions-group', data);

export { renderAccordion, renderAccordionsGroup };
