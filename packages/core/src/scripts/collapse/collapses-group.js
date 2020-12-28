import { Collapse } from './collapse';
import { DisclosuresGroup } from '../disclosure/disclosures-group';

class CollapsesGroup extends DisclosuresGroup {
  get hasFocus () {
    if (this.current === undefined) return null;
    return this.current.hasFocus;
  }

  static get MemberConstructor () { return Collapse; }
}

export { CollapsesGroup };
