import api from '../../../../api';

const tracked = { uid: false, dimensions: [] };

const revoke = (ids) => {
  if (typeof window._paq !== 'object') return;
  const _paq = window._paq;
  if (tracked.uid) _paq.push(['resetUserId']);
  tracked.uid = false;
  const revoked = tracked.dimensions.filter(id => ids.includes(Number(id)));
  revoked.forEach(id => _paq.push(['deleteCustomDimension', Number(id)]));
  tracked.dimensions = tracked.dimensions.filter(id => !revoked.includes(id));
};

const push = (type, layer, hasConsent) => {
  if (typeof window._paq !== 'object') {
    api.inspector.warn('Analytics datalayer not sent, Matomo API isn\'t yet available');
    return;
  }

  const _paq = window._paq;

  if (type === 'collector') {
    const { environment, api_version: apiVersion } = layer;
    api.inspector.info('analytics', 'information', { environment, api_version: apiVersion });

    const sent = {};

    _paq.push(['setCustomUrl', `${layer.path}`]);
    sent.path = layer.path;

    if (layer.title) {
      _paq.push(['setDocumentTitle', layer.title]);
      sent.title = layer.title;
    }

    _paq.push(['setReferrerUrl', layer.referrer]);
    sent.referrer = layer.referrer;

    const removed = {};

    const uid = hasConsent ? layer.uid : undefined;
    if (uid) {
      _paq.push(['setUserId', uid]);
      sent.uid = uid;
    } else if (tracked.uid) {
      _paq.push(['resetUserId']);
      removed.uid = true;
    }
    tracked.uid = !!uid;

    const dimensions = layer.customDimensions || {};
    const removedDimensions = tracked.dimensions.filter(id => !(id in dimensions));
    removedDimensions.forEach(id => _paq.push(['deleteCustomDimension', Number(id)]));
    if (removedDimensions.length > 0) removed.customDimensions = removedDimensions;
    tracked.dimensions = Object.keys(dimensions);

    if (layer.customDimensions) {
      Object.keys(layer.customDimensions).forEach(id => {
        _paq.push(['setCustomDimension', Number(id), layer.customDimensions[id]]);
      });
      sent.customDimensions = layer.customDimensions;
    }

    if (Object.keys(removed).length > 0) sent.removed = removed;

    if (layer.keyword) {
      _paq.push(['trackSiteSearch', layer.keyword, layer.category || false, layer.results !== undefined ? layer.results : false]);
      sent.keyword = layer.keyword;
      if (layer.category) sent.category = layer.category;
      if (layer.results !== undefined) sent.results = layer.results;
    } else {
      _paq.push(['trackPageView']);
    }

    api.inspector.info('analytics', type, sent);
  } else {
    layer.category = layer.category || 'not_dsfr_component';
    _paq.push(['trackEvent', layer.category, layer.action, layer.name, layer.value]);

    api.inspector.info('analytics', type, layer);
  }
};

export { revoke };
export default push;
