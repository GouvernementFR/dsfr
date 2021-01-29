import { Tab } from './tab';

/**
* Classe principale des Tabs, initialise tout les éléments Tab dans la page
*/
class Tabs {
  constructor () {
    this.init();
  }

  init () {
    Tab.build(document);
  }
}

export { Tabs };
