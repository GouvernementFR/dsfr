import api from '../../../api.js';
import { Type } from '../../analytics/action/type';
import { Actionee } from '../core/actionee';
import { ButtonEmission } from './button/button-emission';

class ComponentActionee extends Actionee {
  constructor (priority = -1) {
    super(priority, 'dsfr_component');
  }

  static get instanceClassName () {
    return 'ComponentActionee';
  }

  get proxy () {
    const scope = this;

    const proxyAccessors = {
      get component () {
        return scope.component;
      }
    };

    return api.internals.property.completeAssign(super.proxy, proxyAccessors);
  }

  setDiscloseType () {
    this._type = Type.DISCLOSE;
  }

  listenDisclose () {
    this.listen(api.core.DisclosureEvent.DISCLOSE, this._handleDisclose.bind(this), { capture: true });
  }

  _handleDisclose () {
    this.act();
  }

  setChangeType () {
    this._type = Type.CHANGE;
  }

  listenChange () {
    this.listen('change', this._handleChange.bind(this), { capture: true });
  }

  _handleChange (e) {
    if (e.target && e.target.value) {
      this.setChangeValue(e);
      this.act();
    }
  }

  setChangeValue (e) {
    this.value = e.target.value;
  }

  listenInputValidation (node, type = Type.CLICK, isSendingInputValue = false) {
    if (!node) node = this.node;
    this._type = type;
    this._isSendingInputValue = isSendingInputValue;
    this.addAscent(ButtonEmission.CLICK, this._actValidatedInput.bind(this));
    const button = this.element.getDescendantInstances('ButtonActionee', null, true)[0];
    if (button) button.isMuted = true;
    this._validatedInput = node.querySelector('input');
    this._handlingInputValidation = this._handleInputValidation.bind(this);
    if (this._validatedInput) this._validatedInput.addEventListener('keydown', this._handlingInputValidation);
  }

  _handleInputValidation (e) {
    if (e.keyCode === 13) this._actValidatedInput();
  }

  _actValidatedInput () {
    if (this._isActingValidatedInput) return;
    this._isActingValidatedInput = true;
    if (this._isSendingInputValue) this.value = this._validatedInput.value.trim();
    this.act();
    this.request(this._actedValidatedInput.bind(this));
  }

  _actedValidatedInput () {
    this._isActingValidatedInput = false;
  }

  setCheckType () {
    this._type = Type.CHECK;
  }

  detectCheckableType () {
    const isChecked = this.node.checked;
    this._type = isChecked ? Type.UNCHECK : Type.CHECK;
  }

  listenCheckable () {
    this.listen('change', this._handleCheckable.bind(this), { capture: true });
  }

  _handleCheckable (e) {
    if (e.target && e.target.value !== 'on') {
      this.value = e.target.value;
    }

    switch (true) {
      case this._type === Type.CHECK && e.target.checked:
      case this._type === Type.UNCHECK && !e.target.checked:
        this.act();
        break;
    }
  }

  detectPressableType () {
    const isPressable = this.node.hasAttribute('aria-pressed');
    if (isPressable) {
      const isPressed = this.node.getAttribute('aria-pressed') === 'true';
      this._type = isPressed ? Type.RELEASE : Type.PRESS;
    }
    return isPressable;
  }

  listenPressable () {
    this.listen('click', this._handlePressable.bind(this), { capture: true });
  }

  _handlePressable (e) {
    switch (true) {
      case this._type === Type.PRESS && e.target.getAttribute('aria-pressed') === 'false':
      case this._type === Type.RELEASE && e.target.getAttribute('aria-pressed') === 'true':
        this.act();
        break;
    }
  }

  setDismissType () {
    this._type = Type.DISMISS;
  }

  get component () {
    return null;
  }

  dispose () {
    if (this._validatedInput) {
      this._validatedInput.removeEventListener('keydown', this._handlingInputValidation);
    }

    super.dispose();
  }
}

export { ComponentActionee };
