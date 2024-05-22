import api from '../../../api.js';
import { Type } from '../../analytics/action/type';
import { ActionElement } from '../../analytics/action/action-element';
import { ActioneeEmission } from './actionee-emission';
import { ActionRegulation } from '../../analytics/action/action-regulation';
import normalize from '../../analytics/utils/normalize';

const ActionAttributes = {
  RATING: api.internals.ns.attr('analytics-rating'),
  ACTION: api.internals.ns.attr('analytics-action')
};

class Actionee extends api.core.Instance {
  constructor (priority = -1, category = '', title = null, regulation = ActionRegulation.NONE) {
    super();
    this._type = null;
    this._priority = priority;
    this._category = category;
    this._title = title;
    this._parameters = {};
    this._data = {};
    this._isMuted = false;
    this._regulation = regulation;
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

  get data () {
    return this._data;
  }

  _config (element, registration) {
    super._config(element, registration);

    if (this._type === null) {
      this._sort(element);
      this._isMuted = true;
      return;
    }

    const regulation = this.getRegulation();
    this._regulation = regulation !== ActionRegulation.NONE ? regulation : this._regulation;
    const actionAttribute = this.getAttribute(ActionAttributes.ACTION);
    const title = typeof actionAttribute === 'string' && actionAttribute.toLowerCase() !== 'false' && actionAttribute.toLowerCase() !== 'true' ? normalize(actionAttribute) : this._title;
    this._isRating = this.hasAttribute(ActionAttributes.RATING);

    this._actionElement = new ActionElement(this.node, this._type, this.id, this._category, title, this._parameters, this._isRating, this._regulation);
    if (this._isMuted) this._actionElement.isMuted = true;

    this.addDescent(ActioneeEmission.REWIND, this.rewind.bind(this));

    this._sort(element);
  }

  getRegulation () {
    const actionAttribute = this.getAttribute(ActionAttributes.ACTION);
    switch (true) {
      case typeof actionAttribute === 'string' && actionAttribute.toLowerCase() === 'false':
        return ActionRegulation.PREVENT;
      case actionAttribute !== null:
        return ActionRegulation.ENFORCE;
      default:
        return ActionRegulation.NONE;
    }
  }

  mutate (attributeNames) {
    if (attributeNames.includes(ActionAttributes.ACTION)) {
      const regulation = this.getRegulation();
      if (this._regulation !== regulation) {
        this._regulation = regulation;
        if (this._actionElement) this._actionElement.regulation = regulation;
      }
    }
    super.mutate(attributeNames);
  }

  _sort (element) {
    const actionees = element.instances.filter(instance => instance.isActionee).sort((a, b) => b.priority - a.priority);
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
        this.value = href;
        break;

      case hostname === location.hostname :
        this._type = Type.INTERNAL;
        this.value = href;
        break;

      case hostname.length > 0 :
        this._type = Type.EXTERNAL;
        this.value = href;
        break;

      default:
        this._type = Type.CLICK;
        break;
    }
  }

  setClickType () {
    this._type = Type.CLICK;
  }

  listenActionClick (target) {
    if (target) {
      this._clickTarget = target;
      this._clickTarget.addEventListener('click', this._handlingClick, { capture: true });
    } else this.listenClick({ capture: true });
  }

  handleClick () {
    this.act();
  }

  setImpressionType () {
    this._type = Type.IMPRESSION;
  }

  rewind () {
    if (this._actionElement) this._actionElement.rewind();
  }

  act (data = {}) {
    if (this._actionElement !== undefined) {
      this._data.component_value = this.value;
      this._actionElement.act(Object.assign(this._data, data));
    }
  }

  getFirstText (node) {
    if (!node) node = this.node;
    if (node.childNodes && node.childNodes.length > 0) {
      for (let i = 0; i < node.childNodes.length; i++) {
        if (node.childNodes[i].nodeType === Node.TEXT_NODE) {
          const text = node.childNodes[i].textContent.trim();
          if (text) {
            return this.cropText(text);
          }
        }
      }

      for (let i = 0; i < node.childNodes.length; i++) {
        const text = this.getFirstText(node.childNodes[i]);
        if (text) {
          return this.cropText(text);
        }
      }
    }
    return '';
  }

  cropText (text, length = 50) {
    return text.length > 50 ? `${text.substring(0, 50).trim()}[...]` : text;
  }

  getInteractionLabel () {
    const title = this.getAttribute('title');
    if (title) return this.cropText(title);

    const text = this.getFirstText();
    if (text) return text;

    const img = this.node.querySelector('img');
    if (img) {
      const alt = img.getAttribute('alt');
      if (alt) return this.cropText(alt);
    }

    return null;
  }

  getHeadingLabel (length = 6) {
    const selector = Array.from({ length: length }, (v, i) => `h${i + 1}`).join(',');
    const headings = Array.from(this.querySelectorAll(selector)).filter(heading => (this.node.compareDocumentPosition(heading) & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0);
    if (headings.length) {
      for (const heading of headings) {
        const text = this.getFirstText(heading);
        if (text) return text;
      }
    }
  }

  detectLevel (node) {
    if (!node) node = this.node;
    const selector = Array.from({ length: 6 }, (v, i) => `h${i + 1}`).join(',');
    const levels = Array.from(node.querySelectorAll(selector)).map(heading => Number(heading.tagName.charAt(1)));
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

  get value () {
    return this._value || this.label;
  }

  set value (value) {
    this._value = value;
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
      this._clickTarget.removeEventListener('click', this._handlingClick);
    }
    super.dispose();
  }
}

export { Actionee };
