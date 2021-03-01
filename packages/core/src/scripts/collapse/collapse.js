import { Disclosure } from '../disclosure/disclosure.js';
import { DisclosuresGroup } from '../disclosure/disclosures-group.js';
import { CollapseButton } from './collapse-button.js';
import { CollapsesGroup } from './collapses-group.js';
import { COLLAPSE_CLASS } from './constants.js';
import { DISCLOSURE_TYPES } from '../disclosure/disclosure-types.js';

/**
 * Tab coorespond au panel d'un élement Tabs (tab panel)
 * Tab étend disclosure qui ajoute/enleve le modifier --selected,
 * et ajoute/eleve l'attribut hidden, sur le panel
 */
class Collapse extends Disclosure {
  constructor (element) {
    super(element);

    element.addEventListener('transitionend', this.transitionend.bind(this));
  }

  group () {
    for (const ascendant in CollapsesGroup.ascendants) {
      let element = this.element.parentElement;

      while (element) {
        if (element.classList.contains(ascendant)) {
          if (typeof CollapsesGroup.ascendants[ascendant] === 'string') {
            DisclosuresGroup.groupByParent(this, CollapsesGroup, CollapsesGroup.ascendants[ascendant]);
          } else {
            DisclosuresGroup.groupByParent(this, CollapsesGroup.ascendants[ascendant]);
          }
          return;
        }

        element = element.parentElement;
      }
    }

    super.group();
  }

  get GroupConstructor () { return CollapsesGroup; }

  buttonFactory (element) {
    return new CollapseButton(element, this);
  }

  static get type () { return DISCLOSURE_TYPES.expand; }
  static get selector () { return COLLAPSE_CLASS; }

  transitionend (e) {
    if (!this.disclosed) this.element.style.maxHeight = '';
  }

  apply (value, initial) {
    if (value) this.element.style.maxHeight = 'none';
    this.element.style.setProperty('--collapser', 'none');
    const height = this.element.offsetHeight;
    this.element.style.setProperty('--collapse', -height + 'px');
    this.element.style.setProperty('--collapser', '');

    window.requestAnimationFrame(() => super.apply(value, initial));
  }

  reset () {
    this.apply(false);
  }

  get buttonHasFocus () {
    if (this.buttons.some((button) => { return button.hasFocus; })) return true;
    return false;
  }

  get hasFocus () {
    if (this.element === document.activeElement) return true;
    if (this.element.querySelectorAll(':focus').length > 0) return true;
    return this.buttonHasFocus;
  }
}

export { Collapse };
