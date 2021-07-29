import api from '../../api.js';
import { SidemenuSelectors } from './sidemenu-selectors.js';

class SidemenuList extends api.core.CollapsesGroup {
  validate (member) {
    return member.node.matches(SidemenuSelectors.COLLAPSE);
  }
}

export { SidemenuList };
