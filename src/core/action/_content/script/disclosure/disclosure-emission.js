import ref from '../../../ref.js';

const DisclosureEmission = {
  RESET: ref.internals.ns.emission('disclosure', 'reset'),
  ADDED: ref.internals.ns.emission('disclosure', 'added'),
  REMOVED: ref.internals.ns.emission('disclosure', 'removed'),
  GROUP: ref.internals.ns.emission('disclosure', 'group'),
  UNGROUP: ref.internals.ns.emission('disclosure', 'ungroup')
};

export { DisclosureEmission };
