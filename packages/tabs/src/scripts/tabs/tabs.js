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
    const wrappers = [...document.querySelectorAll(TABS_SELECTOR)];

    for (let i = 0; i < wrappers.length; i++) this.groups.push(new TabsGroup(wrappers[i]));
  }
}

export { Tabs };
