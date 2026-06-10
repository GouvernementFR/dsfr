import api from '../../../../api.js';

export const ConnectSelector = {
  CONNECT: `${api.internals.ns.selector('connect')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`,
  LINK: `${api.internals.ns.selector('connect + * a, connect + a')}:not(${api.internals.ns.attr.selector('analytics-action', 'reduce')})`
};
