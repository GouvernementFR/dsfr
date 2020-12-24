import { TabsGroup } from './tabs-group';
import { TABS_SELECTOR } from './tabs-constants';

/**
* Classe principale des Tabs, initialise tout les éléments Tabs (TabsGroup) dans la page
*/
class Tabs {
  constructor () {
    this.groups = [];
    this.init();
  }

  init () {
    const wrappers = document.querySelectorAll(TABS_SELECTOR);
    this.changing = this.change.bind(this);

    for (let i = 0; i < wrappers.length; i++) this.groups.push(new TabsGroup(wrappers[i]));

    window.addEventListener('resize', this.changing);
    window.addEventListener('load', this.changing);
    // this.change();
  }

  change () {
    for (let i = 0; i < this.groups.length; i++) {
      this.groups[i].update();
    }
  }
}

export { Tabs };
