import api from '../../api.js';

export const ACCORDIONS_GROUP_SELECTOR = api.ns.selector('accordions-group');
export const ACCORDION_COLLAPSE_SELECTOR = `${api.ns.selector('accordion')} > ${api.ns.selector('collapse')}`;
