import { TabButton } from './tab-button';
import { PANEL_SELECTOR } from './tabs-constants';
import { TabsGroup } from './tabs-group';
import { Disclosure } from '@gouvfr/core/src/scripts';

/**
  * Tab coorespond au panel d'un élement Tabs (tab panel)
  * Tab étend disclosure qui ajoute/enleve le modifier --selected,
  * et ajoute/eleve l'attribut hidden, sur le panel
  */
class Tab extends Disclosure {
  static get type () { return Disclosure.TYPES.select; }
  static get selector () { return PANEL_SELECTOR; }

  get GroupConstructor () { return TabsGroup; }

  buttonFactory (element) {
    return new TabButton(element, this);
  }
}

export { Tab };
