import { Collapse } from './collapse';
import { DisclosuresGroup } from '../disclosure/disclosures-group';

class CollapsesGroup extends DisclosuresGroup {
  get hasFocus () {
    if (this.current === undefined) return null;
    return this.current.hasFocus;
  }

  disclosureFactory (element, type, selector) {
    return new Collapse(element, type, selector);
  }
}

export { CollapsesGroup };
