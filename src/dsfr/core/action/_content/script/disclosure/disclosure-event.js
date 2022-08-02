import ref from '../../../ref';

const DisclosureEvent = {
  DISCLOSE: ref.internals.ns.event('disclose'),
  CONCEAL: ref.internals.ns.event('conceal')
};

export { DisclosureEvent };
