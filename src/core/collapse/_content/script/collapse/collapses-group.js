import { DisclosuresGroup } from '../../../../action/_content/script/disclosure/disclosures-group.js';

class CollapsesGroup extends DisclosuresGroup {
  constructor () {
    super('Collapse');
  }

  static get instanceClassName () {
    return 'CollapsesGroup';
  }
}

export { CollapsesGroup };
