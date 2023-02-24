import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import { SidemenuSelector } from './sidemenu-selector';
import ID from './id';

class SidemenuActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'SidemenuActionee';
  }

  get label () {
    const sidemenu = this.node.closest(SidemenuSelector.SIDEMENU);
    if (sidemenu) {
      const title = sidemenu.querySelector(SidemenuSelector.TITLE);
      if (title) return title.textContent.trim();
    }

    return 'Sidemenu';
  }

  get component () {
    return ID;
  }
}

export { SidemenuActionee };
