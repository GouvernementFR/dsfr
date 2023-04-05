import api from '../../../../api.js';
import { ComponentActionee } from '../component-actionee';
import { TabButtonActionee } from './tab-button-actionee';
import ID from './id';

class TabActionee extends ComponentActionee {
  constructor () {
    super(2, true);
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
      if (tab) return this.getFirstText();
    }

    const button = this._instance.buttons.filter(button => button.isPrimary)[0];
    if (button) return this.getFirstText(button);
    return null;
  }

  get component () {
    return ID;
  }
}

export { TabActionee };
