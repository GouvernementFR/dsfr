import { ComponentActionee } from '../component-actionee';
import { SidemenuSelector } from './sidemenu-selector';

class SidemenuSectionActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'SidemenuSectionActionee';
  }

  init () {
    this._wrapper = this.node.closest(SidemenuSelector.ITEM);
  }

  get label () {
    if (this._wrapper) {
      const button = this._wrapper.querySelector(SidemenuSelector.BUTTON);
      if (button) return button.textContent.trim();
    }
    const instance = this.element.getInstance('Collapse');
    if (instance) {
      const button = instance.buttons.filter(button => button.isPrimary)[0];
      if (button) return this.getFirstText(button);
    }
    return null;
  }
}

export { SidemenuSectionActionee };
