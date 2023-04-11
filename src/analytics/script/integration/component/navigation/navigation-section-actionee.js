import api from '../../../../api';
import { ComponentActionee } from '../component-actionee';
import { NavigationSelector } from './navigation-selector';

class NavigationSectionActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'NavigationSectionActionee';
  }

  init () {
    this._wrapper = this.node.closest(api.navigation.NavigationSelector.ITEM);
  }

  get label () {
    if (this._wrapper) {
      const button = this._wrapper.querySelector(NavigationSelector.BUTTON);
      if (button) return this.getFirstText(button);
    }

    const instance = this.element.getInstance('Collapse');
    if (instance) {
      const button = instance.buttons.filter(button => button.isPrimary)[0];
      if (button) return this.getFirstText(button);
    }
    return null;
  }
}

export { NavigationSectionActionee };
