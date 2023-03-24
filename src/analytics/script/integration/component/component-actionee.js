import api from '../../../api.js';
import { Type } from '../../analytics/action/type';
import { Actionee } from '../core/actionee';

class ComponentActionee extends Actionee {
  constructor (type = null, priority = -1) {
    super(type, priority, 'dsfr_component');
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

  listenDisclose () {
    this.listen(api.core.DisclosureEvent.DISCLOSE, this.handleDisclose.bind(this), { capture: true });
  }

  handleDisclose () {
    this.act();
  }

  listenChange () {
    this.listen('change', this.handleChange.bind(this), { capture: true });
  }

  listenCheckable () {
    this.listen('change', this.handleCheckable.bind(this), { capture: true });
  }

  listenPressable () {
    this.listen('click', this.handlePressable.bind(this), { capture: true });
  }

  handleChange (e) {
    if (e.target && e.target.value) {
      this._data.component_value = e.target.value;
      this.act();
    }
  }

  handleCheckable (e) {
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

  handlePressable (e) {
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

  detectCheckable () {
    const isChecked = this.node.checked;
    this._type = isChecked ? Type.UNCHECK : Type.CHECK;
  }

  detectPressable () {
    const isPressable = this.node.hasAttribute('aria-pressed');
    if (isPressable) {
      const isPressed = this.node.getAttribute('aria-pressed') === 'true';
      this._type = isPressed ? Type.RELEASE : Type.PRESS;
    }
    return isPressable;
  }

  get component () {
    return null;
  }
}

export { ComponentActionee };
