import { ComponentActionee } from '../component-actionee';
import { SidemenuSelector } from './sidemenu-selector';

class SidemenuActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'SidemenuActionee';
  }

  get label () {
    const sidemenu = this.node.closest(SidemenuSelector.SIDEMENU);
    if (sidemenu) {
      const title = sidemenu.querySelector(SidemenuSelector.TITLE);
      if (title) {
        const firstText = this.getFirstText(title);
        if (firstText) return firstText;
      }
    }

    return 'menu Latéral';
  }
}

export { SidemenuActionee };
