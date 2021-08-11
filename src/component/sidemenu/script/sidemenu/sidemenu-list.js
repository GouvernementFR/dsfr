import api from '../../api.js';
import { SidemenuSelector } from './sidemenu-selector.js';

class SidemenuList extends api.core.CollapsesGroup {
  static get instanceClassName () {
    return 'SidemenuList';
  }

  validate (member) {
    return member.node.matches(SidemenuSelector.COLLAPSE);
  }
}

export { SidemenuList };
