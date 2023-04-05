import api from '../../../api.js';
import { Type } from '../../analytics/action/type';
import { Actionee } from '../core/actionee';
import { ButtonEmission } from './button/button-emission';

class ComponentActionee extends Actionee {
  constructor (priority = -1, isRatingActive = false) {
    super(priority, isRatingActive, 'dsfr_component');
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
      this._data.component_value = e.target.value;
      this.act();
    }
  }

  listenInputValidation (node, type = Type.CLICK) {
    if (!node) node = this.node;
    this._type = type;
    this.addAscent(ButtonEmission.CLICK, this._actValidatedInput.bind(this));
    const button = this.element.getDescendantInstances('ButtonActionee', null, true)[0];
    if (button) button.isMuted = true;
    this._validatedInput = node.querySelector('input');
    this._inputValidationHandler = this._handleInputValidation.bind(this);
    if (this._validatedInput) this._validatedInput.addEventListener('keydown', this._inputValidationHandler);
  }

  _handleInputValidation (e) {
    if (e.keyCode === 13) this._actValidatedInput();
  }

  _actValidatedInput () {
    if (this._isActingValidatedInput) return;
    this._isActingValidatedInput = true;
    this.act({ component_value: this._validatedInput.value.trim() });
    this.request(() => { this._isActingValidatedInput = false; });
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
      this._data.component_value = e.target.value;
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
    // if (e.target && e.target.value !== 'on') {
    //   this._data.component_value = e.target.value;
    // }

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
      this._validatedInput.removeEventListener('keydown', this._inputValidationHandler);
    }

    super.dispose();
  }

  getFirstText (node) {
    if (!node) node = this.node;
    if (node.childNodes.length === 0) return '';
    if (node.childNodes[0].nodeType === Node.TEXT_NODE) {
      if (node.childNodes[0].textContent.trim() === '') return node.childNodes[1] ? node.childNodes[1].textContent.trim() : '';
      return node.childNodes[0].textContent.trim();
    } else {
      return this.getFirstText(node.childNodes[0]);
    }
  }
}

export { ComponentActionee };
