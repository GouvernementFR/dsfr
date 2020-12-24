import { TabButton } from './tab-button';
import { PANEL_SELECTOR } from './tabs-constants';
import { Disclosure } from '@gouvfr/core/src/scripts';

/**
  * Tab coorespond au panel d'un élement Tabs (tab panel)
  * Tab étend disclosure qui ajoute/enleve le modifier --selected,
  * et ajoute/eleve l'attribut hidden, sur le panel
  */
class Tab extends Disclosure {
  constructor (element) {
    super(element);
    this.element.setAttribute('tabindex', '-1');
  }

  static get type () { return Disclosure.TYPES.select; }
  static get selector () { return PANEL_SELECTOR; }

  buttonFactory (element) {
    return new TabButton(element, this);
  }

  /**
  * apply(true), Affiche le panel
  * apply(false), Cache le panel
  */
  apply (value) {
    super.apply(value);
    console.log('apply', this.element);
    this.element.setAttribute('tabindex', value ? '0' : '-1');
  }
}

export { Tab };
