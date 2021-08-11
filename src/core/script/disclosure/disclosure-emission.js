import ns from '../api/utilities/namespace.js';

const DisclosureEmission = {
  RESET: ns.emission('disclosure', 'reset'),
  ADDED: ns.emission('disclosure', 'added'),
  REMOVED: ns.emission('disclosure', 'removed'),
  GROUP: ns.emission('disclosure', 'group'),
  UNGROUP: ns.emission('disclosure', 'ungroup')
};

export { DisclosureEmission };
