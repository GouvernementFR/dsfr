import api from '../../../api.js';

class ComponentActionee extends api.core.Instance {
  static get instanceClassName () {
    return 'ComponentActionee';
  }

  get proxy () {
    const scope = this;
    const proxyAccessors = {
      get isComponentActionee () {
        return true;
      },
      get label () {
        return scope.label;
      },
      get component () {
        return scope.component;
      },
      get priority () {
        return scope.priority;
      }
    };

    return api.internals.property.completeAssign(super.proxy, proxyAccessors);
  }

  get label () {
    return null;
  }

  get component () {
    return null;
  }

  get priority () {
    return 0;
  }
}

export { ComponentActionee };
