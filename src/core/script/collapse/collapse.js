import { Disclosure } from '../disclosure/disclosure.js';
import { CollapseSelector } from './collapse-selector.js';
import { DisclosureType } from '../disclosure/disclosure-type.js';
import { CollapseButton } from './collapse-button.js';

/**
 * Tab coorespond au panel d'un élement Tabs (tab panel)
 * Tab étend disclosure qui ajoute/enleve le modifier --selected,
 * et ajoute/eleve l'attribut hidden, sur le panel
 */
class Collapse extends Disclosure {
  constructor () {
    super(DisclosureType.EXPAND, CollapseSelector.COLLAPSE, CollapseButton, 'CollapsesGroup');
  }

  static get instanceClassName () {
    return 'Collapse';
  }

  init () {
    super.init();
    this.listen('transitionend', this.transitionend.bind(this));
  }

  transitionend (e) {
    this.removeClass(CollapseSelector.COLLAPSING);
    if (!this.isDisclosed) {
      if (this.isLegacy) this.style.maxHeight = '';
      else this.style.removeProperty('--collapse-max-height');
    }
  }

  unbound () {
    if (this.isLegacy) this.style.maxHeight = 'none';
    else this.style.setProperty('--collapse-max-height', 'none');
  }

  disclose (withhold) {
    if (this.isDisclosed || !this.isEnabled) return false;
    this.unbound();
    this.request(() => {
      this.addClass(CollapseSelector.COLLAPSING);
      this.adjust();
      this.request(() => {
        super.disclose(withhold);
      });
    });
  }

  conceal (withhold, preventFocus) {
    if (!this.isDisclosed || !this.isEnabled) return false;
    this.request(() => {
      this.addClass(CollapseSelector.COLLAPSING);
      this.adjust();
      this.request(() => {
        super.conceal(withhold, preventFocus);
      });
    });
  }

  adjust () {
    this.setProperty('--collapser', 'none');
    const height = this.node.offsetHeight;
    this.setProperty('--collapse', -height + 'px');
    this.setProperty('--collapser', '');
  }

  reset () {
    if (!this.isPristine) this.isDisclosed = false;
  }

  isButtonPrimary (button) {
    let p = this.node;
    const parents = [];
    while (p) {
      p = p.parentNode;
      parents.push(p);
    }

    const rect = this.getRect();

    let index = -1;
    p = button.node;
    while (index === -1) {
      p = p.parentNode;
      index = parents.indexOf(p);
    }

    const buttonRect = button.getRect();
    let i;

    for (const other of this.buttons) {
      if (other === button || !other.canDisclose || this.node.contains(other.node)) continue;
      p = other.node;
      while (p) {
        p = p.parentNode;
        i = parents.indexOf(p);
        if (i > -1) {
          if (i < index) return false;
          if (i > index) break;
          const otherRect = other.getRect();
          if (Math.abs(rect.y - buttonRect.y) > Math.abs(rect.y - otherRect.y)) return false;
          if (Math.abs(rect.x - buttonRect.x) > Math.abs(rect.x - otherRect.x)) return false;
          break;
        }
      }
    }
    return true;
  }
}

export { Collapse };
