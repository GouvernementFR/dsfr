import api from '../../api.js';
import { RangeEmission } from './range-emission.js';
import { RangeConstraints } from './range-constraints';

class RangeInput extends api.core.Instance {
  static get instanceClassName () {
    return 'RangeInput';
  }

  init () {
    this._init();
    this._value = parseFloat(this.node.getAttribute('value'));
    if (this.isLegacy) this.addDescent(RangeEmission.ENABLE_POINTER, this._enablePointer.bind(this));
    this.isRendering = true;
    this.change();
  }

  _init () {
    this._pointerId = 1;
    this.request(() => {
      if (!this.hasAttribute('min')) this.setAttribute('min', 0);
      this.ascend(RangeEmission.CONSTRAINTS, new RangeConstraints(this.node));
      this.ascend(RangeEmission.DISABLED, this.node.disabled);
    });

    this.addDescent(RangeEmission.VALUE2, this.setValue.bind(this));
  }

  get proxy () {
    const scope = this;

    const proxyAccessors = {
      get value () {
        return scope.value;
      },
      set value (value) {
        scope.value = value;
      }
    };

    return api.internals.property.completeAssign(super.proxy, proxyAccessors);
  }

  _enablePointer (pointerId) {
    const isEnabled = pointerId === this._pointerId;
    if (this._isPointerEnabled === isEnabled) return;
    this._isPointerEnabled = isEnabled;
    if (isEnabled) this.style.removeProperty('pointer-events');
    else this.style.setProperty('pointer-events', 'none');
  }

  get value () {
    return parseFloat(this.node.value);
  }

  set value (value) {
    const parsedValue = parseFloat(value);
    if (parsedValue === this._value) return;
    this._value = parsedValue;
    this.node.value = parsedValue;
    this.dispatch('change');
    this.change();
  }

  setValue (value) {
    if (parseFloat(this.node.value) > value) {
      this.value = value;
    }
  }

  change () {
    this.ascend(RangeEmission.VALUE, this._value);
  }

  render () {
    const parsedValue = parseFloat(this.node.value);
    if (parsedValue !== this._value) this.value = parsedValue;
  }

  mutate (attributesNames) {
    if (attributesNames.includes('disabled')) this.ascend(RangeEmission.DISABLED, this.node.disabled);
    if (attributesNames.includes('min') || attributesNames.includes('max') || attributesNames.includes('step')) {
      this.ascend(RangeEmission.CONSTRAINTS, new RangeConstraints(this.node));
      this.change();
    }
  }

  dispose () {
    if (this._listenerType) this.unlisten(this._listenerType, this._changing);
  }
}

export { RangeInput };
