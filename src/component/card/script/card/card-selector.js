import api from '../../api.js';

export const CardSelector = {
  DOWNLOAD: api.internals.ns.selector('card--download'),
  DOWNLOAD_DETAIL: `${api.internals.ns.selector('card--download')} ${api.internals.ns.selector('card__end')} ${api.internals.ns.selector('card__detail')}`
};
