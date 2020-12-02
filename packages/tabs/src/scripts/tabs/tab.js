import { TabButton } from './tab-button';
import { TRANSITION_TIME, TABS_SELECTOR } from './tabs-constants';
import { Disclosure } from '@gouvfr/utilities/src/scripts';
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
      // resize all elements after animation finish
      const tabs = document.querySelectorAll(TABS_SELECTOR);
      for (let i = 0; i < tabs.length; i++) {
        setTimeout(() => {
          tabs[i].dispatchEvent(new Event('setHeight'));
          console.log('resize');
        }, TRANSITION_TIME * i);
      }
    } else {
      this.element.setAttribute(HIDDEN, true);
    }
  }
}

export { Tab };
