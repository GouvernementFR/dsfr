import { Disclosure } from '../disclosure/disclosure.js';
import { CollapseSelectors } from './collapse-selectors.js';
import { DisclosureTypes } from '../disclosure/disclosure-types.js';
import { CollapseButton } from './collapse-button';

/**
 * Tab coorespond au panel d'un élement Tabs (tab panel)
 * Tab étend disclosure qui ajoute/enleve le modifier --selected,
 * et ajoute/eleve l'attribut hidden, sur le panel
 */
class Collapse extends Disclosure {
  constructor () {
    super(DisclosureTypes.EXPAND, CollapseSelectors.COLLAPSE, CollapseButton, 'CollapsesGroup');
  }

  init () {
    super.init();
    this.listen('transitionend', this.transitionend.bind(this));
  }

  transitionend (e) {
    if (!this.disclosed) this.style.maxHeight = '';
  }

  unbound () {
    this.style.maxHeight = 'none';
  }

  disclose (withhold) {
    if (this.disclosed) return;
    this.unbound();
    this.adjust();
    this.requestNext(() => { super.disclose(withhold); });
  }

  conceal (withhold, preventFocus) {
    if (!this.disclosed) return;
    this.adjust();
    this.requestNext(() => { super.conceal(withhold, preventFocus); });
  }

  adjust () {
    this.setProperty('--collapser', 'none');
    const height = this.node.offsetHeight;
    this.setProperty('--collapse', -height + 'px');
    this.setProperty('--collapser', '');
  }

  reset () {
    if (!this.pristine) this.disclosed = false;
  }
}

export { Collapse };
