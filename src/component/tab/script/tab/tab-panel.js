import api from '../../api.js';
import { TabButton } from './tab-button.js';
import { TabSelector } from './tab-selector.js';

/**
  * Tab coorespond au panel d'un élement Tabs (tab panel)
  * Tab étend disclosure qui ajoute/enleve le modifier --selected,
  * et ajoute/eleve l'attribut hidden, sur le panel
  */
class TabPanel extends api.core.Disclosure {
  constructor () {
    super(api.core.DisclosureType.SELECT, TabSelector.PANEL, TabButton, 'TabsGroup');
  }

  static get instanceClassName () {
    return 'TabPanel';
  }

  translate (direction, initial) {
    this.style.transition = initial ? 'none' : '';
    this.style.transform = `translate(${direction * 100}%)`;
  }

  reset () {
    this.group.index = 0;
  }
}

export { TabPanel };
