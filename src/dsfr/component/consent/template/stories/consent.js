import ejsRenderer from '../../../../renderer.js';
const renderConsentBanner = (data) => ejsRenderer.render('consent-banner', data);
const renderConsentManager = (data) => ejsRenderer.render('consent-manager', data);
const renderConsentPlaceholder = (data) => ejsRenderer.render('consent-placeholder', data);

export { renderConsentBanner, renderConsentManager, renderConsentPlaceholder };
