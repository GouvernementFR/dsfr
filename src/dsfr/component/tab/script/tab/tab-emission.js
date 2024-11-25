import api from '../../api.js';

export const TabEmission = {
  PRESS_KEY: api.internals.ns.emission('tab', 'press_key'),
  LIST_HEIGHT: api.internals.ns.emission('tab', 'list_height')
};
