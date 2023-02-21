import api from '../../../api.js';
import { Type } from '../../analytics/action/type';
import { ActionElement } from '../../analytics/action/action-element';

class ComponentActionee extends api.core.Instance {
  constructor (type = Type.CLICK, priority = 0) {
    super();
    this._type = type;
    this._priority = 0;
  }

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

  _config (element, registration) {
    super._config(element, registration);
    this._actionElement = new ActionElement(this.node, this._type, this.id);

    const actionees = element.instances.filter(instance => instance.isComponentActionee).sort((a, b) => b.priority - a.priority);
    console.log(element.instances, actionees);
    if (actionees.length <= 1) return;
    console.warn('REMOVE', actionees);
    actionees[0].isMuted = false;
    actionees.slice(1).forEach(actionee => { actionee.actionElement.isMuted = true; });
  }

  act (data = {}) {
    this._actionElement.act(data);
  }

  get actionElement () {
    return this._actionElement;
  }

  get label () {
    return null;
  }

  get component () {
    return null;
  }

  get priority () {
    return this._priority;
  }

  get isComponentActionee () {
    return true;
  }
}

export { ComponentActionee };
