import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import { TabButtonActionee } from './tab-button-actionee';
import ID from './id';

class TabActionee extends ComponentActionee {
  constructor () {
    super(Type.DISCLOSE, 2);
  }

  static get instanceClassName () {
    return 'TabActionee';
  }

  init () {
    this.register(`[aria-controls="${this.id}"]`, TabButtonActionee);
    this._instance = this.element.getInstance('TabPanel');
    this.listenDisclose();
  }

  get label () {
    const tabs = this.node.closest(api.tab.TabSelector.GROUP);
    if (tabs) {
      const tab = tabs.querySelector(`${api.tab.TabSelector.LIST} [aria-controls="${this.id}"]${api.tab.TabSelector.TAB}`);
      if (tab) return tab.textContent.trim();
    }

    const button = this._instance.buttons.filter(button => button.isPrimary)[0];
    if (button) return button.node.textContent.trim();
    return null;
  }

  get component () {
    return ID;
  }
}

export { TabActionee };
