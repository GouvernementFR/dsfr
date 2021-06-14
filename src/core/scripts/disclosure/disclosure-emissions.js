import { ns } from '../global/namespace.js';

const DisclosureEmissions = {
  RESET: ns.event('DISCLOSURE_RESET_EMISSION'),
  ADDED: ns.event('DISCLOSURE_ADDED_EMISSION'),
  REMOVED: ns.event('DISCLOSURE_REMOVED_EMISSION'),
  GROUP: ns.event('DISCLOSURE_GROUP_EMISSION'),
  UNGROUP: ns.event('DISCLOSURE_UNGROUP_EMISSION')
};

export { DisclosureEmissions };
