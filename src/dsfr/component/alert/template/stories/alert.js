import ejsRenderer from '../../../../renderer.js';

const renderAlert = (data) => ejsRenderer.render('alert.ejs', data);

const renderAlertsGroup = (data) => ejsRenderer.render('alerts-group.ejs', data);

export { renderAlert, renderAlertsGroup };
