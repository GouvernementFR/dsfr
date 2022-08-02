import ref from '../../../ref.js';
import { SidemenuSelector } from './sidemenu-selector.js';

class SidemenuList extends ref.action.CollapsesGroup {
  static get instanceClassName () {
    return 'SidemenuList';
  }

  validate (member) {
    return member.node.matches(SidemenuSelector.COLLAPSE);
  }
}

export { SidemenuList };
