import api from '../../../../api';
import { Type } from './type';

const NODE_POSITION = Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY;

class Heading {
  constructor (heading) {
    this._label = heading.textContent.trim();
    this._level = Number(heading.tagName.charAt(1));
  }

  get level () {
    return this._level;
  }

  get label () {
    return this._label;
  }
}

class Member {
  constructor (node, target, level) {
    this._type = Type.UNDEFINED;
    this._node = node;
    this._target = target;
    this._level = level;
    this._label = '';
    this._component = '';
    this._isValid = true;
    this.analyse();
  }

  _parseHeadings () {
    const selector = Array.from({ length: this._level }, (v, i) => `h${i + 1}`).join(',');
    this._headings = Array.from(this._node.querySelectorAll(selector)).filter(heading => heading === this._node || heading.parentNode === this._node || (heading.parentNode != null && heading.parentNode.parentNode === this._node)).filter(heading => (this._target.compareDocumentPosition(heading) & NODE_POSITION) > 0).map(heading => new Heading(heading)).reverse();
  }

  _getComponent () {
    if (typeof api !== 'function') return false;
    const element = api(this._node);
    if (!element) return false;
    const instance = Object.values(element).filter(actionee => actionee.isActionee).sort((a, b) => b.priority - a.priority)[0];
    if (!instance) return false;

    this._type = Type.COMPONENT;
    this._isValid = instance.validate(this._target);
    const selector = Array.from({ length: 6 }, (v, i) => `h${i + 1}`).join(',');
    const top = Array.from(this._node.querySelectorAll(selector)).map(heading => new Heading(heading)).sort((a, b) => a.level - b.level)[0];
    if (top && top.level <= this._level) this._level = top.level - 1;

    const hx = this._node.closest(selector);
    if (hx) {
      const heading = new Heading(hx);
      if (heading.level <= this._level) this._level = heading.level - 1;
    }

    if (!isNaN(instance.level) && instance.level < this._level) this._level = instance.level;
    this._label = instance.label;
    this._component = instance.component;
    return true;
  }

  _getHeading () {
    if (!this._headings.length) return false;
    const labels = [];
    this._headings.forEach(heading => {
      if (heading.level <= this._level) {
        if (heading.level > 1) labels.unshift(heading.label);
        this._level = heading.level - 1;
      }
    });
    if (!labels.length) return false;
    this._type = Type.HEADING;
    this._label = labels.join(' › ');
    return true;
  }

  analyse () {
    this._parseHeadings();
    if (this._getComponent()) return;
    if (this._getHeading()) return;
    if (this._node !== this._target) return;

    const label = this._node.textContent.trim();
    if (!label) return;
    this._type = Type.CONTENT;
    this._label = label;
  }

  get type () {
    return this._type;
  }

  get level () {
    return this._level;
  }

  get label () {
    return this._label;
  }

  get component () {
    return this._component;
  }

  get node () {
    return this._node;
  }

  get target () {
    return this._target;
  }

  get isValid () {
    return this._isValid;
  }
}

export { Member };
