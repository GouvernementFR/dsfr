import api from '../../../../api.js';

export const ConnectSelector = {
  CONNECT: api.internals.ns.selector('connect'),
  LINK: api.internals.ns.selector('connect + * a, connect + a')
};
