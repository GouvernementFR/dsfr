import { TabButton } from './tab-button';
import { Disclosure } from '@frds/utilities/src/scripts';
const HIDDEN = 'hidden';

/**
  * Tab coorespond au panel d'un élement Tabs (tab panel)
  * Tab étend disclosure qui ajoute/enleve le modifier --selected,
  * et ajoute/eleve l'attribut hidden, sur le panel
  */
class Tab extends Disclosure {
  buttonFactory (element) {
    return new TabButton(element, this);
  }

  /**
  * apply(true), Affiche le panel
  * apply(false), Cache le panel
  */
  apply (value) {
    super.apply(value);
    if (value) {
      this.element.removeAttribute(HIDDEN);
    } else {
      this.element.setAttribute(HIDDEN, true);
    }
  }
}

export { Tab };
