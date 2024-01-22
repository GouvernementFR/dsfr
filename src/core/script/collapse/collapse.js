import { Disclosure } from '../disclosure/disclosure.js';
import { CollapseSelector } from './collapse-selector.js';
import { DisclosureType } from '../disclosure/disclosure-type.js';
import { CollapseButton } from './collapse-button.js';
import { CollapseMethod } from './collapse-method.js';

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
    this.method = this.getAttribute(CollapseSelector.COLLAPSE_METHOD);
  }

  transitionend (e) {
    this.removeClass(CollapseSelector.COLLAPSING);
    switch (this._method) {
      case CollapseMethod.HEIGHT:
        break;

      case CollapseMethod.WIDTH:
        break;

      default:
        if (!this.isDisclosed) {
          if (this.isLegacy) this.style.maxHeight = '';
          else this.style.removeProperty('--collapse-max-height');
        }
    }
  }

  unbound () {
    this.removeClass(CollapseSelector.COLLAPSING);
    switch (this._method) {
      case CollapseMethod.HEIGHT:
        break;

      case CollapseMethod.WIDTH:
        break;

      default:
        if (this.isLegacy) this.style.maxHeight = 'none';
        else this.style.setProperty('--collapse-max-height', 'none');
    }
  }

  disclose (withhold) {
    if (this.isDisclosed === true || !this.isEnabled) return false;
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
    if (this.isDisclosed === false) return false;
    this.request(() => {
      this.addClass(CollapseSelector.COLLAPSING);
      this.adjust();
      this.request(() => {
        super.conceal(withhold, preventFocus);
      });
    });
  }

  adjustMargin () {
    this.setProperty('--collapser', 'none');
    const height = this.node.offsetHeight;
    this.setProperty('--collapse', -height + 'px');
    this.setProperty('--collapser', '');
  }

  adjustWidth () {
    this.node.style.width = 'auto';
    const width = this.node.offsetWidth;
    this.node.style.width = '';
    this.setProperty('--collapse-width', width);
  }

  adjustHeight () {
    this.node.style.height = 'auto';
    const height = this.node.offsetHeight;
    this.node.style.height = '';
    this.setProperty('--collapse-height', height);
  }

  get method () {
    return this._method;
  }

  set method (value) {
    switch (value) {
      case CollapseMethod.WIDTH:
        this.adjust = this.adjustWidth;
        break;

      case CollapseMethod.HEIGHT:
        this.adjust = this.adjustHeight;
        break;

      default:
        this.adjust = this.adjustMargin;
        break;
    }
  }

  mutate (attributesNames) {
    if (attributesNames.includes(CollapseSelector.COLLAPSE_METHOD)) {
      this.method = this.getAttribute(CollapseSelector.COLLAPSE_METHOD);
    }
  }

  reset () {
    if (!this.isPristine) this.isDisclosed = false;
  }

  _electPrimaries (candidates) {
    const primary = this.element.parent.instances.map(instance => instance.collapsePrimary).filter(button => button !== undefined && candidates.indexOf(button) > -1);
    if (primary.length === 1) return primary;
    candidates = super._electPrimaries(candidates);
    if (candidates.length === 1) return candidates;
    const before = candidates.filter(candidate => candidate.dy >= 0);
    if (before.length > 0) candidates = before;
    if (candidates.length === 1) return candidates;
    const min = Math.min(...candidates.map(candidate => candidate.dy));
    const mins = candidates.filter(candidate => candidate.dy === min);
    if (mins.length > 0) candidates = mins;
    if (candidates.length === 1) return candidates;
    candidates.sort((a, b) => Math.abs(b.dx) - Math.abs(a.dx));
    return candidates;
  }
}

export { Collapse };
