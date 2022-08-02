import { DisclosuresGroup } from '../../../../.TODO/script/disclosure/disclosures-group.js';

class CollapsesGroup extends DisclosuresGroup {
  constructor () {
    super('Collapse');
  }

  static get instanceClassName () {
    return 'CollapsesGroup';
  }
}

export { CollapsesGroup };
