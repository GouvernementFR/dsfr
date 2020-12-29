import { Disclosure } from '../disclosure/disclosure';
import { DisclosuresGroup } from '../disclosure/disclosures-group';
import { CollapseButton } from './collapse-button';
import { CollapsesGroup } from './collapses-group';
import { COLLAPSE_SELECTOR } from './collapse-constants';
import { CollapsePlugin } from './collapse-plugin';

/**
 * Tab coorespond au panel d'un élement Tabs (tab panel)
 * Tab étend disclosure qui ajoute/enleve le modifier --selected,
 * et ajoute/eleve l'attribut hidden, sur le panel
 */
class Collapse extends Disclosure {
  constructor (element) {
    super(element);

    this.groupByPlugins();

    element.addEventListener('transitionend', this.transitionend.bind(this));
  }

  groupByPlugins () {
    for (const plugin of CollapsePlugin.plugins) {
      let element = this.element.parentElement;

      while (element) {
        if (element.classList.contains(plugin.ascendant)) {
          DisclosuresGroup.groupByParent(this, plugin.GroupConstructor);
          break;
        }

        element = element.parentElement;
      }
    }
  }

  get GroupConstructor () { return CollapsesGroup; }

  buttonFactory (element) {
    return new CollapseButton(element, this);
  }

  static get type () { return Disclosure.TYPES.expand; }
  static get selector () { return COLLAPSE_SELECTOR; }

  transitionend (e) {
    if (!this.disclosed) this.element.style.maxHeight = '0';
  }

  apply (value) {
    if (value) {
      this.element.style.maxHeight = '';
      this.element.style.setProperty('--collapser', 'none');
      const height = this.element.offsetHeight;
      this.element.style.setProperty('--collapse', -height + 'px');
      this.element.style.setProperty('--collapser', '');

      window.requestAnimationFrame(() => super.apply(true));
    } else {
      const height = this.element.offsetHeight;
      this.element.style.setProperty('--collapse', -height + 'px');
      super.apply(false);
    }
  }

  reset () {
    this.apply(false);
  }

  get hasFocus () {
    if (this.element === document.activeElement) return true;
    if (this.element.querySelectorAll(':focus').length > 0) return true;
    if (this.buttons.some((button) => { return button.hasFocus; })) return true;
    return false;
  }
}

export { Collapse };
