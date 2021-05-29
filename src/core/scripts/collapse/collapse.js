import { Disclosure } from '../disclosure/disclosure.js';
import { COLLAPSE_CLASS } from './constants.js';
import { DISCLOSURE_TYPES } from '../disclosure/disclosure-types.js';
import { CollapseButton } from './collapse-button';
import { CollapsesGroup } from './collapses-group';


/**
 * Tab coorespond au panel d'un élement Tabs (tab panel)
 * Tab étend disclosure qui ajoute/enleve le modifier --selected,
 * et ajoute/eleve l'attribut hidden, sur le panel
 */
class Collapse extends Disclosure {
  constructor () {
    super(DISCLOSURE_TYPES.expand, COLLAPSE_CLASS, CollapseButton, CollapsesGroup);
    this.requesting = this.request.bind(this);
    // if (this.disclosed) this.unbound();
  }

  init () {
    super.init();
    this.listen('transitionend', this.transitionend.bind(this));
  }

  /*
  gatherByAscendants () {
    if (this.group) return;

    for (const ascendant in ascendants) {
      let element = this.element.parentElement;

      while (element) {
        if (element.classList.contains(ascendant)) {
          if (typeof ascendants[ascendant] === 'string') {
            DisclosuresGroup.groupByParent(this, DisclosuresGroup, ascendants[ascendant]);
          } else {
            DisclosuresGroup.groupByParent(this, ascendants[ascendant]);
          }
          return;
        }

        element = element.parentElement;
      }
    }
  }

  gather () {
    this.gatherByAscendants();
    super.gather();
  }

  static get type () { return DISCLOSURE_TYPES.expand; }
  static get selector () { return COLLAPSE_CLASS; }

  static register (ascendant, groupSelector) {
    ascendants[ascendant] = groupSelector;
    for (const collapse of collapses) collapse.gatherByAscendants();
  }

   */

  transitionend (e) {
    if (!this.disclosed) this.element.node.style.maxHeight = '';
  }

  unbound () {
    this.element.node.style.maxHeight = 'none';
  }

  disclose (withhold) {
    if (this.disclosed) return;
    this.unbound();
    this.adjust();
    this.requested = () => { super.disclose(withhold); };
    window.requestAnimationFrame(this.requesting);
  }

  conceal (withhold, preventFocus) {
    if (!this.disclosed) return;
    this.adjust();
    this.requested = () => { super.conceal(withhold, preventFocus); };
    window.requestAnimationFrame(this.requesting);
  }

  request () {
    if (this.requested) this.requested();
    this.requested = null;
  }

  adjust () {
    this.element.node.style.setProperty('--collapser', 'none');
    const height = this.element.node.offsetHeight;
    this.element.node.style.setProperty('--collapse', -height + 'px');
    this.element.node.style.setProperty('--collapser', '');
  }

  reset () {
    if (!this.pristine) this.disclosed = false;
  }
}

export { Collapse };
