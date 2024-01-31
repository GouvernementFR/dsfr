import { DisclosuresGroup } from '../disclosure/disclosures-group.js';

class CollapsesGroup extends DisclosuresGroup {
  constructor () {
    super('Collapse');
  }

  static get instanceClassName () {
    return 'CollapsesGroup';
  }

  get canUngroup () {
    return true;
  }
}

export { CollapsesGroup };
