import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { TabButtonActionee } from './tab-button-actionee';
import ID from './id';

class TabActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'TabActionee';
  }

  init () {
    this.setDiscloseType();
    this.register(`[aria-controls="${this.id}"]`, TabButtonActionee);
    this._instance = this.element.getInstance('TabPanel');
    this.listenDisclose();
  }

  get label () {
    const tabs = this.node.closest(api.tab.TabSelector.GROUP);
    if (tabs) {
      const tab = tabs.querySelector(`${api.tab.TabSelector.LIST} [aria-controls="${this.id}"]${api.tab.TabSelector.TAB}`);
      if (tab) {
        const firstTextTab = this.getFirstText(tab);
        if (firstTextTab) return firstTextTab;
      }
    }

    const button = this._instance.buttons.filter(button => button.isPrimary)[0];
    if (button) {
      const firstTextBtn = this.getFirstText(button);
      if (firstTextBtn) return firstTextBtn;
    }
    return 'onglet';
  }

  get component () {
    return ID;
  }
}

export { TabActionee };
