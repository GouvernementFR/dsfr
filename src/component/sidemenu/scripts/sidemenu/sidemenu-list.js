import api from '../../api.js';
import { SidemenuSelectors } from './sidemenu-selectors.js';

class SidemenuList extends api.core.CollapsesGroup {
  static get instanceClassName () {
    return 'SidemenuList';
  }

  validate (member) {
    return member.node.matches(SidemenuSelectors.COLLAPSE);
  }
}

export { SidemenuList };
