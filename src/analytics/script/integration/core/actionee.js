import api from '../../../api.js';
import { Type } from '../../analytics/action/type';
import { ActionElement } from '../../analytics/action/action-element';
import { ActioneeEmission } from './actionee-emission';

class Actionee extends api.core.Instance {
  constructor (priority = -1, isRatingActive = false, category = '', title = null) {
    super();
    this._type = null;
    this._priority = priority;
    this._category = category;
    this._title = title;
    this._parameters = {};
    this._data = {};
    this._isMuted = false;
    this._isRatingActive = isRatingActive;
  }

  static get instanceClassName () {
    return 'Actionee';
  }

  get proxy () {
    const scope = this;

    const proxy = {
      validate: (target, members) => scope.validate(target, members)
    };

    const proxyAccessors = {
      get isActionee () {
        return true;
      },
      get label () {
        return scope.label;
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

  _config (element, registration) {
    super._config(element, registration);

    if (this._type === null) {
      this._isMuted = true;
      return;
    }

    this._actionElement = new ActionElement(this.node, this._type, this.id, this._category, this._title, this._parameters, this._isRatingActive);
    if (this._isMuted) this._actionElement.isMuted = true;

    this.addDescent(ActioneeEmission.REWIND, this.rewind.bind(this));

    const actionees = element.instances.filter(instance => instance.isActionee && instance.type).sort((a, b) => b.priority - a.priority);
    if (actionees.length <= 1) return;
    actionees.forEach((actionee, index) => { actionee.isMuted = index > 0; });
  }

  get isMuted () {
    return this._actionElement ? this._actionElement.isMuted : this._isMuted;
  }

  set isMuted (value) {
    this._isMuted = value;
    if (this._actionElement) this._actionElement.isMuted = value;
  }

  get priority () {
    return this._priority;
  }

  setPriority (value) {
    this._priority = value;
  }

  get isInteractive () {
    return this.node.tagName === 'A' || this.node.tagName === 'BUTTON';
  }

  detectInteractionType (node) {
    if (!node) node = this.node;
    const tag = node.tagName;
    const href = node.getAttribute('href');
    const isDownload = node.hasAttribute('download');
    const hostname = node.hostname;

    switch (true) {
      case tag !== 'A':
        this._type = Type.CLICK;
        break;

      case isDownload:
        this._type = Type.DOWNLOAD;
        this._parameters.component_value = href;
        break;

      case hostname === location.hostname :
        this._type = Type.INTERNAL;
        this._parameters.component_value = href;
        break;

      case hostname.length > 0 :
        this._type = Type.EXTERNAL;
        this._parameters.component_value = href;
        break;

      default:
        this._type = Type.CLICK;
        break;
    }
  }

  setClickType () {
    this._type = Type.CLICK;
  }

  listenClick (target) {
    if (target) {
      this._clickTarget = target;
      this._clickHandler = this.handleClick.bind(this);
      this._clickTarget.addEventListener('click', this._clickHandler, { capture: true });
    } else this.listen('click', this.handleClick.bind(this), { capture: true });
  }

  handleClick () {
    this.act();
  }

  setImpressionType () {
    this._type = Type.IMPRESSION;
  }

  rewind () {
    console.log(this._title, document.documentElement.contains(this.node));
    if (this._actionElement) this._actionElement.rewind();
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

  get isActionee () {
    return true;
  }

  get level () {
    return this._level;
  }

  get type () {
    return this._type;
  }

  dispose () {
    if (this._clickTarget) {
      this._clickTarget.removeEventListener('click', this._clickHandler);
    }
    super.dispose();
  }
}

export { Actionee };
