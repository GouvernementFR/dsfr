import { Instance } from '../../api/register/instance.js';
import { completeAssign } from '../../api/utilities/property/complete-assign.js';
import { ToggleEvent } from './toggle-event.js';

class Toggle extends Instance {
  static get instanceClassName () {
    return 'Toggle';
  }

  init () {
    this.pressed = this.pressed === 'true';
    this.listen('click', this.toggle.bind(this));
  }

  toggle () {
    this.pressed = this.pressed !== 'true';
  }

  get pressed () {
    return this.getAttribute('aria-pressed');
  }

  set pressed (value) {
    this.setAttribute('aria-pressed', value ? 'true' : 'false');
    this.dispatch(ToggleEvent.TOGGLE, value);
  }

  get proxy () {
    const scope = this;
    const proxy = Object.assign(super.proxy, {
      toggle: scope.toggle.bind(scope)
    });

    const proxyAccessors = {
      get pressed () {
        return scope.pressed;
      },
      set pressed (value) {
        scope.pressed = value;
      }
    };

    return completeAssign(proxy, proxyAccessors);
  }
}

export { Toggle };
