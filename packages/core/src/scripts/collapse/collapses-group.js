import { DisclosuresGroup } from '../disclosure/disclosures-group';

const ascendants = {};

class CollapsesGroup extends DisclosuresGroup {
  get hasFocus () {
    if (this.current === undefined) return null;
    return this.current.hasFocus;
  }

  static register (ascendant, groupSelector) {
    ascendants[ascendant] = groupSelector;
  }

  static get ascendants () { return ascendants; };
}

export { CollapsesGroup };
