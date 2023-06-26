import api from '../../api.js';
import { SidemenuSelector } from './sidemenu-selector.js';

class SidemenuItem extends api.core.Instance {
  static get instanceClassName () {
    return 'SidemenuItem';
  }

  get collapsePrimary () {
    const buttons = this.element.children.map(child => child.getInstance('CollapseButton')).filter(button => button !== null && button.hasClass(SidemenuSelector.BUTTON));
    return buttons[0];
  }
}

export { SidemenuItem };
