import { Disclosures } from '../disclosure/disclosures-group';

class CollapseGroup extends Disclosures {
  get hasFocus () {
    if (this.current === undefined) return null;
    return this.current.hasFocus;
  }
}

export { CollapseGroup };
