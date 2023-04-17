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
      if (button) {
        const firstText = this.getFirstText(button);
        if (firstText) return firstText;
      }
    }
    const instance = this.element.getInstance('Collapse');
    if (instance) {
      const button = instance.buttons.filter(button => button.isPrimary)[0];
      if (button) {
        const firstTextBtn = this.getFirstText(button);
        if (firstTextBtn) return firstTextBtn;
      }
    }
    return 'section menu latéral';
  }
}

export { SidemenuSectionActionee };
