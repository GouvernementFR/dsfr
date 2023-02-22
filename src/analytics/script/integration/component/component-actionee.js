import api from '../../../api.js';
import { Type } from '../../analytics/action/type';
import { ActionElement } from '../../analytics/action/action-element';

class ComponentActionee extends api.core.Instance {
  constructor (type = null, priority = 0) {
    super();
    this._type = type;
    this._priority = 0;
    this._data = {};
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
    if (this._type !== null) this._actionElement = new ActionElement(this.node, this._type, this.id);

    const actionees = element.instances.filter(instance => instance.isComponentActionee).sort((a, b) => b.priority - a.priority);
    if (actionees.length <= 1) return;
    actionees[0].isMuted = false;
    actionees.slice(1).forEach(actionee => { actionee.actionElement.isMuted = true; });
  }

  detectLinkOrButton () {
    const tag = this.node.tagName.toLowerCase();
    const href = this.getAttribute('href');
    const target = this.getAttribute('target');
    const isDownload = this.getAttribute('download');

    switch (true) {
      case tag === 'a' && isDownload:
        this._type = Type.DOWNLOAD;
        this._data.component_value = href;
        break;

      case tag === 'a' && typeof target === 'string' && target.toLowerCase() === '_blank':
        this._type = Type.EXTERNAL;
        this._data.component_value = href;
        break;

      case tag === 'a':
        this._type = Type.INTERNAL;
        this._data.component_value = href;
        break;

      default:
        this._type = Type.CLICK;
    }
  }

  act (data = {}) {
    if (this._actionElement !== undefined) this._actionElement.act(Object.assign(this._data, data));
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
