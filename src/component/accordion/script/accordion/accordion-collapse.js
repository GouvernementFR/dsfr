import api from '../../api.js';

class Accordion extends api.core.Collapse {
  static get instanceClassName () {
    return 'AccordionCollapse';
  }

  _electPrimaries (candidates) {
    if (!this.group) return [];
    const primaries = super._electPrimaries(candidates).filter(candidate => this.group.list.node.contains(candidate.node));
    return primaries;
  }
}

export { AccordionCollapse };
