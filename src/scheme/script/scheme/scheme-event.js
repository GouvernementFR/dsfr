import api from '../../api.js';

const SchemeEvent = {
  SCHEME: api.internals.ns.event('scheme'),
  THEME: api.internals.ns.event('theme')
};

export { SchemeEvent };
