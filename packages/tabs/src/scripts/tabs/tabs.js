import { TabsGroup } from './tabs-group';
import { TABS_SELECTOR } from './tabs-constants';

/**
* Main class, initialize all Tabs element (TabsGroup) in the page
*/
class Tabs {
  constructor () {
    this.groups = [];
    this.init();
  }

  init () {
    const wrappers = document.querySelectorAll(TABS_SELECTOR);

    for (let i = 0; i < wrappers.length; i++) this.groups.push(new TabsGroup(wrappers[i]));

    this.changing = this.change.bind(this);
    window.addEventListener('resize', this.changing);
    window.addEventListener('load', this.changing);
    // this.change();
  }

  change () {
    for (let i = 0; i < this.groups.length; i++) {
      this.groups[i].setPanelHeight();
    }
  }
}

export { Tabs };
