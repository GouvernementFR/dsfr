import api from '../../api.js';

export const SchemeSelectors = {
  SCHEME: `:root${api.ns.attr.selector('theme')}, :root${api.ns.attr.selector('scheme')}`
};
