import api from '../../api.js';

const SegmentedEmission = {
  ADDED: api.internals.ns.emission('segmented', 'added'),
  REMOVED: api.internals.ns.emission('segmented', 'removed')
};

export { SegmentedEmission };
