import { ComponentActionee } from '../component-actionee';
import { SidemenuSelector } from './sidemenu-selector';

class SidemenuSectionActionee extends ComponentActionee {
  constructor () {
    super(null, 2);
  }

  static get instanceClassName () {
    return 'SidemenuSectionActionee';
  }

  init () {
    this._wrapper = this.node.closest(SidemenuSelector.ITEM);
    this._instance = this.element.getInstance('Collapse');
  }

  get label () {
    if (this._wrapper) {
      const button = this._wrapper.querySelector(SidemenuSelector.BUTTON);
      if (button) return button.textContent.trim();
    }
    const button = this._instance.buttons.filter(button => button.isPrimary)[0];
    if (button) return button.node.textContent.trim();
    return null;
  }
}

export { SidemenuSectionActionee };
