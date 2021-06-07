import { addClass, removeClass } from '../manipulation/classes.js';
import { Instance } from '../engine/register/instance.js';
import { CONCEAL_EVENT, DISCLOSE_EVENT } from './events';

class Disclosure extends Instance {
  constructor (type, selector, DisclosureButtonInstanceClass, disclosuresGroupInstanceClassName) {
    super();
    this.type = type;
    this._selector = selector;
    this.DisclosureButtonInstanceClass = DisclosureButtonInstanceClass;
    this.disclosuresGroupInstanceClassName = disclosuresGroupInstanceClassName;
    this.modifier = this._selector + '--' + this.type.id;
    this.pristine = true;
  }

  init () {
    this.id = this.element.node.id;
    this.addDescent('disclosure_reset', this.reset.bind(this));
    this.register(`[aria-controls="${this.id}"`, this.DisclosureButtonInstanceClass);
  }

  get proxy () {
    const scope = this;
    return {
      ...super.proxy,
      disclose: scope.disclose.bind(scope),
      conceal: scope.conceal.bind(scope),
      focus: scope.focus.bind(scope),
      get buttons () {
        return scope.buttons.map((button) => button.proxy);
      }
    };
  }

  get buttons () {
    return this.getRegisteredInstances(this.DisclosureButtonInstanceClass.name);
  }

  get group () {
    if (!this.disclosuresGroupInstanceClassName) return null;
    return this.element.getAscendantInstance(this.disclosuresGroupInstanceClassName, this.constructor.name);
  }

  disclose (withhold) {
    if (this.disclosed) return false;
    this.pristine = false;
    this.disclosed = true;
    const group = this.group;
    if (!withhold && group) group.current = this;
    return true;
  }

  conceal (withhold, preventFocus) {
    if (!this.disclosed) return false;
    this.pristine = false;
    this.disclosed = false;
    if (!preventFocus) this.focus();
    const group = this.group;
    if (!withhold && group) group.current = null;
    this.descend('disclosure_reset');
    return true;
  }

  get disclosed () {
    return this._disclosed;
  }

  set disclosed (value) {
    if (this._disclosed === value) return;
    this.dispatch(value ? DISCLOSE_EVENT : CONCEAL_EVENT, this.type);
    this._disclosed = value;
    if (value) addClass(this.element.node, this.modifier);
    else removeClass(this.element.node, this.modifier);
    for (let i = 0; i < this.buttons.length; i++) this.buttons[i].apply(value);
  }

  reset () {}

  change (hasAttribute) {
    if (!this.type.canConceal) this.disclose();
    else {
      switch (true) {
        case !hasAttribute:
        case this.disclosed:
          this.conceal();
          break;

        default:
          this.disclose();
      }
    }
  }

  get buttonHasFocus () {
    if (this.buttons.some((button) => { return button.hasFocus; })) return true;
    return false;
  }

  get hasFocus () {
    if (this.element.node === document.activeElement) return true;
    if (this.element.node.querySelectorAll(':focus').length > 0) return true;
    return this.buttonHasFocus;
  }

  focus () {
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];
      if (button.hasAttribute) {
        button.focus();
        return;
      }
    }
  }
}

Disclosure.DISCLOSE_EVENT = DISCLOSE_EVENT;
Disclosure.CONCEAL_EVENT = CONCEAL_EVENT;

export { Disclosure };
