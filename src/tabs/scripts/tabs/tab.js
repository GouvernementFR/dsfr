import api from '../../api.js';
import { TabButton } from './tab-button.js';
import { PANEL_CLASS } from './constants.js';
import { TabsGroup } from './tabs-group.js';

/**
  * Tab coorespond au panel d'un élement Tabs (tab panel)
  * Tab étend disclosure qui ajoute/enleve le modifier --selected,
  * et ajoute/eleve l'attribut hidden, sur le panel
  */
class Tab extends api.core.Disclosure {
  static get type () { return api.core.DISCLOSURE_TYPES.select; }
  static get selector () { return PANEL_CLASS; }

  get GroupConstructor () { return TabsGroup; }

  buttonFactory (element) {
    return new TabButton(element, this);
  }

  translate (direction, initial) {
    if (initial) this.element.style.transition = 'none';
    this.element.style.transform = `translate(${direction * 100}%)`;
    if (initial) this.element.style.transition = '';
  }

  reset () {
    this.group.index = 0;
  }
}

export { Tab };
