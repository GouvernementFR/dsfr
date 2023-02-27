import api from '../../../api.js';
import { Type } from '../../analytics/action/type';
import { ActionElement } from '../../analytics/action/action-element';

class ComponentActionee extends api.core.Instance {
  constructor (type = null, priority = 0) {
    super();
    this._type = type;
    this._priority = priority;
    this._data = {};
  }

  static get instanceClassName () {
    return 'ComponentActionee';
  }

  get proxy () {
    const scope = this;

    const proxy = {
      validate: (target, members) => scope.validate(target, members)
    };

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
      },
      get level () {
        return scope.level;
      },
      get node () {
        return scope.node; // TODO: remove in v2
      }
    };

    return api.internals.property.completeAssign(super.proxy, proxy, proxyAccessors);
  }

  listenClick () {
    this.listen('click', this.handleClick.bind(this), { capture: true });
  }

  handleClick () {

  }

  listenDisclose () {
    this.listen(api.core.DisclosureEvent.DISCLOSE, this.handleDisclose.bind(this), { capture: true });
  }

  handleDisclose () {
    this.act();
  }

  listenCheckable () {
    this.listen('change', this.handleCheckable.bind(this), { capture: true });
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

  _config (element, registration) {
    super._config(element, registration);
    if (this._type !== null) this._actionElement = new ActionElement(this.node, this._type, this.id);

    const actionees = element.instances.filter(instance => instance.isComponentActionee).sort((a, b) => b.priority - a.priority);
    if (actionees.length <= 1) return;
    actionees.forEach((actionee, index) => { actionee.isMuted = index > 0; });
  }

  get isMuted () {
    return !this._actionElement && this._actionElement.isMuted;
  }

  set isMuted (value) {
    if (this._actionElement) this._actionElement.isMuted = value;
  }

  detectInteraction (node) {
    if (!node) node = this.node;
    const tag = node.tagName.toLowerCase();
    const href = node.getAttribute('href');
    const target = node.getAttribute('target');
    const isDownload = node.hasAttribute('download');

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

  detectCheckable () {
    const isChecked = this.node.checked;
    this._type = isChecked ? Type.UNCHECK : Type.CHECK;
  }

  act (data = {}) {
    if (this._actionElement !== undefined) this._actionElement.act(Object.assign(this._data, data));
  }

  getInteractionLabel () {
    const title = this.getAttribute('title');
    if (title) return title;

    const content = this.node.textContent.trim();
    if (content) return content;

    const img = this.node.querySelector('img');
    if (img) return img.getAttribute('alt').trim();

    return null;
  }

  detectLevel (node) {
    if (!node) node = this.node;
    const selector = Array.from({ length: 6 }, (v, i) => `h${i + 1}`).join(',');
    const levels = [...node.querySelectorAll(selector)].map(heading => Number(heading.tagName.charAt(1)));
    if (levels.length) this._level = Math.min.apply(null, levels) - 1;
  }

  validate (target) {
    return true;
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

  get level () {
    return this._level;
  }
}

export { ComponentActionee };
