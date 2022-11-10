import ref from '../../../../ref';
import { PressableEvent } from './pressable-event.js';

class Pressable extends ref.api.Instance {
  static get instanceClassName () {
    return 'Pressable';
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
    this.dispatch(PressableEvent.PRESS, value);
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

    return ref.internals.property.completeAssign(proxy, proxyAccessors);
  }
}

export { Pressable };
