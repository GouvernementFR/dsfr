import { Instance } from '../api/register/instance.js';
import { DisclosureEvents } from './disclosure-events.js';
import { DisclosureEmissions } from './disclosure-emissions.js';

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
    this.addDescent(DisclosureEmissions.RESET, this.reset.bind(this));
    this.addDescent(DisclosureEmissions.GROUP, this.update.bind(this));
    this.addDescent(DisclosureEmissions.UNGROUP, this.update.bind(this));
    this.register(`[aria-controls="${this.id}"]`, this.DisclosureButtonInstanceClass);
    this.ascend(DisclosureEmissions.ADDED);
    this.update();
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
      },
      get group () {
        const group = scope.group;
        return group ? group.proxy : null;
      }
    };
  }

  get buttons () {
    return this.getRegisteredInstances(this.DisclosureButtonInstanceClass.name);
  }

  update () {
    this.getGroup();
  }

  getGroup () {
    if (!this.disclosuresGroupInstanceClassName) {
      this._group = null;
      return;
    }

    const group = this.element.getAscendantInstance(this.disclosuresGroupInstanceClassName, this.constructor.name);
    if (!group || !group.validate(this)) {
      this._group = null;
      return;
    }

    this._group = group;
  }

  get group () {
    return this._group;
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
    if (!withhold && this.group && this.group.current === this) this.group.current = null;
    this.descend(DisclosureEmissions.RESET);
    return true;
  }

  get disclosed () {
    return this._disclosed;
  }

  set disclosed (value) {
    if (this._disclosed === value) return;
    this.dispatch(value ? DisclosureEvents.DISCLOSE : DisclosureEvents.CONCEAL, this.type);
    this._disclosed = value;
    if (value) this.addClass(this.modifier);
    else this.removeClass(this.modifier);
    for (let i = 0; i < this.buttons.length; i++) this.buttons[i].apply(value);
  }

  reset () {}

  change (isPrimary) {
    if (!this.type.canConceal) this.disclose();
    else {
      switch (true) {
        case !isPrimary:
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
    if (super.hasFocus) return true;
    if (this.buttonHasFocus) return true;
    return this.querySelectorAll(':focus').length > 0;
  }

  focus () {
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];
      if (button.isPrimary) {
        button.focus();
        return;
      }
    }
  }

  dispose () {
    this._group = null;
    super.dispose();
    this.ascend(DisclosureEmissions.REMOVED);
  }
}

export { Disclosure };
