import api from '../../api.js';
import { SidemenuSelector } from './sidemenu-selector.js';

class SidemenuList extends api.core.CollapsesGroup {
  static get instanceClassName () {
    return 'SidemenuList';
  }

  validate (member) {
    return super.validate(member) && member.node.matches(api.internals.legacy.isLegacy ? SidemenuSelector.COLLAPSE_LEGACY : SidemenuSelector.COLLAPSE);
  }
}

export { SidemenuList };
