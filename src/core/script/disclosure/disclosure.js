import { Instance } from '../api/modules/register/instance.js';
import { DisclosureEvent } from './disclosure-event.js';
import { DisclosureEmission } from './disclosure-emission.js';
import { completeAssign } from '../api/utilities/property/complete-assign.js';

class Disclosure extends Instance {
  constructor (type, selector, DisclosureButtonInstanceClass, disclosuresGroupInstanceClassName) {
    super();
    this.type = type;
    this._selector = selector;
    this.DisclosureButtonInstanceClass = DisclosureButtonInstanceClass;
    this.disclosuresGroupInstanceClassName = disclosuresGroupInstanceClassName;
    this.modifier = this._selector + '--' + this.type.id;
    this._isPristine = true;
    this._isRetrievingPrimaries = false;
    this._hasRetrieved = false;
    this._primaryButtons = [];
  }

  static get instanceClassName () {
    return 'Disclosure';
  }

  init () {
    this.addDescent(DisclosureEmission.RESET, this.reset.bind(this));
    this.addDescent(DisclosureEmission.GROUP, this.update.bind(this));
    this.addDescent(DisclosureEmission.UNGROUP, this.update.bind(this));
    this.addAscent(DisclosureEmission.SPOTLIGHT, this.disclose.bind(this));
    this.register(`[aria-controls="${this.id}"]`, this.DisclosureButtonInstanceClass);
    this.ascend(DisclosureEmission.ADDED);
    this.listenHash(this.id, this._spotlight.bind(this));
    this.update();
  }

  get isEnabled () { return super.isEnabled; }

  set isEnabled (value) {
    if (this.isEnabled === value) return;
    super.isEnabled = value;
    if (value) this.ascend(DisclosureEmission.ADDED);
    else this.ascend(DisclosureEmission.REMOVED);
  }

  get isPristine () {
    return this._isPristine;
  }

  get proxy () {
    const scope = this;
    const proxy = Object.assign(super.proxy, {
      disclose: scope.disclose.bind(scope),
      focus: scope.focus.bind(scope)
    });

    if (this.type.canConceal) proxy.conceal = scope.conceal.bind(scope);

    const proxyAccessors = {
      get buttons () {
        return scope.buttons.map((button) => button.proxy);
      },
      get group () {
        const group = scope.group;
        return group ? group.proxy : null;
      },
      get isDisclosed () {
        return scope.isDisclosed;
      }
    };

    return completeAssign(proxy, proxyAccessors);
  }

  get buttons () {
    return this.getRegisteredInstances(this.DisclosureButtonInstanceClass.instanceClassName);
  }

  update () {
    this.getGroup();
    this.retrievePrimaries();
  }

  getGroup () {
    if (!this.disclosuresGroupInstanceClassName) {
      this._group = null;
      return;
    }

    const group = this.element.getAscendantInstance(this.disclosuresGroupInstanceClassName, this.constructor.instanceClassName);
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
    if (this.isDisclosed === true || !this.isEnabled) return false;
    this._isPristine = false;
    this.isDisclosed = true;
    if (!withhold && this.group) this.group.current = this;
    return true;
  }

  conceal (withhold, preventFocus = true) {
    if (this.isDisclosed === false) return false;
    if (!this.type.canConceal && this.group && this.group.current === this) return false;
    this.isDisclosed = false;
    if (!withhold && this.group && this.group.current === this) this.group.current = null;
    if (!preventFocus) this.focus();
    if (!this._isPristine) this.descend(DisclosureEmission.RESET);
    return true;
  }

  get isDisclosed () {
    return this._isDisclosed;
  }

  set isDisclosed (value) {
    if (this._isDisclosed === value || (!this.isEnabled && value === true)) return;
    this.dispatch(value ? DisclosureEvent.DISCLOSE : DisclosureEvent.CONCEAL, this);
    this._isDisclosed = value;
    if (value) this.addClass(this.modifier);
    else this.removeClass(this.modifier);
    for (let i = 0; i < this.buttons.length; i++) this.buttons[i].apply(value);
  }

  get isInitiallyDisclosed () {
    return this.primaryButtons.some(button => button.isInitiallyDisclosed);
  }

  hasRetrieved () {
    return this._hasRetrieved;
  }

  reset () {}

  toggle (canDisclose) {
    if (!this.type.canConceal) this.disclose();
    else {
      switch (true) {
        case !canDisclose:
        case this.isDisclosed:
          this.conceal(false, false);
          break;

        default:
          this.disclose();
      }
    }
  }

  get buttonHasFocus () {
    return this.buttons.some((button) => { return button.hasFocus; });
  }

  get hasFocus () {
    if (super.hasFocus) return true;
    if (this.buttonHasFocus) return true;
    return this.querySelectorAll(':focus').length > 0;
  }

  focus () {
    if (this._primaryButtons.length > 0) this._primaryButtons[0].focus();
  }

  get primaryButtons () {
    return this._primaryButtons;
  }

  retrievePrimaries () {
    if (this._isRetrievingPrimaries) return;
    this._isRetrievingPrimaries = true;
    this.request(this._retrievePrimaries.bind(this));
  }

  _retrievePrimaries () {
    this._isRetrievingPrimaries = false;
    this._primaryButtons = this._electPrimaries(this.buttons);

    if (this._hasRetrieved || this._primaryButtons.length === 0) return;
    this.retrieved();
    this._hasRetrieved = true;

    this.applyAbility(true);

    if (this.group) {
      this.group.retrieve();
      return;
    }

    if (this._isPristine && this.isEnabled && !this.group) {
      switch (true) {
        case this.hash === this.id:
          this._spotlight();
          break;

        case this.isInitiallyDisclosed:
          this.disclose();
          break;
      }
    }
  }

  retrieved () {}

  _spotlight () {
    this.disclose();
    this.request(() => { this.ascend(DisclosureEmission.SPOTLIGHT); });
  }

  _electPrimaries (candidates) {
    return candidates.filter(button => button.canDisclose && !this.node.contains(button.node));
  }

  applyAbility (withhold = false) {
    const isEnabled = !this._primaryButtons.every(button => button.isDisabled);

    if (this.isEnabled === isEnabled) return;

    this.isEnabled = isEnabled;

    if (withhold) return;

    if (!this.isEnabled && this.isDisclosed) {
      if (this.group) this.ascend(DisclosureEmission.REMOVED);
      else if (this.type.canConceal) this.conceal();
    }

    if (this.isEnabled) {
      if (this.group) this.ascend(DisclosureEmission.ADDED);
      if (this.hash === this.id) {
        this._spotlight();
      }
    }
  }

  dispose () {
    this._group = null;
    this._primaryButtons = null;
    super.dispose();
    this.ascend(DisclosureEmission.REMOVED);
  }
}

export { Disclosure };
