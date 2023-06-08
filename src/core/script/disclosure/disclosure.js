import { Instance } from '../api/modules/register/instance.js';
import { DisclosureEvent } from './disclosure-event.js';
import { DisclosureEmission } from './disclosure-emission.js';
import { completeAssign } from '../api/utilities/property/complete-assign.js';
import { Initial } from './initial';

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
    this._primaryButtons = [];
  }

  static get instanceClassName () {
    return 'Disclosure';
  }

  init () {
    this.addDescent(DisclosureEmission.RESET, this.reset.bind(this));
    this.addDescent(DisclosureEmission.GROUP, this.update.bind(this));
    this.addDescent(DisclosureEmission.UNGROUP, this.update.bind(this));
    this.register(`[aria-controls="${this.id}"]`, this.DisclosureButtonInstanceClass);
    this.ascend(DisclosureEmission.ADDED);
    this.listenHash(this.id, () => this.disclose());
    this.update();
  }

  get isEnabled () { return super.isEnabled; }

  set isEnabled (value) {
    if (this.isEnabled === value) return;
    super.isEnabled = value;
    if (value) this.ascend(DisclosureEmission.ADDED);
    else this.ascend(DisclosureEmission.REMOVED);
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
      }
    };

    return completeAssign(proxy, proxyAccessors);
  }

  get buttons () {
    return this.getRegisteredInstances(this.DisclosureButtonInstanceClass.instanceClassName);
  }

  update () {
    this.getGroup();
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
    if (this.isDisclosed || !this.isEnabled) return false;
    this._isPristine = false;
    this.isDisclosed = true;
    if (!withhold && this.group) this.group.current = this;
    return true;
  }

  conceal (withhold, preventFocus) {
    if (!this.isDisclosed) return false;
    if (!this.type.canConceal && this.group && this.group.current === this) return false;
    this.isDisclosed = false;
    if (!withhold && this.group && this.group.current === this) this.group.current = null;
    if (!preventFocus) this.focus();
    this.descend(DisclosureEmission.RESET);
    return true;
  }

  get isDisclosed () {
    return this._isDisclosed;
  }

  set isDisclosed (value) {
    if (this._isDisclosed === value || !this.isEnabled) return;
    this.dispatch(value ? DisclosureEvent.DISCLOSE : DisclosureEvent.CONCEAL, this.type);
    this._isDisclosed = value;
    if (value) this.addClass(this.modifier);
    else this.removeClass(this.modifier);
    for (let i = 0; i < this.buttons.length; i++) this.buttons[i].apply(value);
  }

  reset () {}

  toggle (canDisclose) {
    if (!this.type.canConceal) this.disclose();
    else {
      switch (true) {
        case !canDisclose:
        case this.isDisclosed:
          this.conceal();
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

  get initial () {
    return this._initial;
  }

  retrievePrimaries () {
    if (this._isRetrievingPrimaries) return;
    this._isRetrievingPrimaries = true;
    this.request(this._retrievePrimaries.bind(this));
  }

  _retrievePrimaries () {
    this._isRetrievingPrimaries = false;
    this._hasRetrieved = true;

    this._primaryButtons = this._electPrimaries(this.buttons);

    if (this._primaryButtons.length === 0) return;

    console.log(this.id, this._isPristine, this.isEnabled, this._primaryButton.isDisclosed, this.hash === this.id);

    this.isEnabled = !this._primaryButtons.some(button => button.isDisabled);
    this.ascend(DisclosureEmission.RETRIEVE);

    switch (true) {
      case this.isEnabled && this._isPristine && this._primaryButtons.some(button => button.isDisclosed):
        console.log('retrievePrimary primary true', this.id);
        this._initial ||= Initial.ATTRIBUTE;
        if (!this.group) this.disclose();
        break;

      case this.isEnabled && this._isPristine && this.hash === this.id:
        this._initial ||= Initial.ATTRIBUTE;
        if (!this.group) this.disclose();
        break;

      case !this.isEnabled && this.isDisclosed:
        this.conceal();
        break;
    }
  }

  _electPrimaries (candidates) {
    return candidates.filter(button => button.canDisclose && !this.node.contains(button.node));
  }

  dispose () {
    this._group = null;
    super.dispose();
    this.ascend(DisclosureEmission.REMOVED);
  }
}

export { Disclosure };
