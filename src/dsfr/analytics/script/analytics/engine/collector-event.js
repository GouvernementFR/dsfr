import api from '../../../api.js';

const CollectorEvent = {
  COLLECT: api.internals.ns.event('collect')
};

export { CollectorEvent };
