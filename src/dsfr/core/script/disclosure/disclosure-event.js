import ns from '../api/utilities/namespace.js';

const DisclosureEvent = {
  DISCLOSE: ns.event('disclose'),
  CONCEAL: ns.event('conceal'),
  CURRENT: ns.event('current')
};

export { DisclosureEvent };
