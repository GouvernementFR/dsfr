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
    this.node = node;
    this.target = target;
    this._level = level;
    this._label = '';
    this._component = '';
    this.analyse();
  }

  _parseHeadings () {
    const selector = Array.from({ length: this._level - 1 }, (v, i) => `h${i + 2}`).join(',');
    this._headings = [...this.node.querySelectorAll(selector)].filter(heading => (this.target.compareDocumentPosition(heading) & NODE_POSITION) > 0).map(heading => new Heading(heading)).reverse();
  }

  _getComponent () {
    if (typeof api !== 'function') return false;
    console.log('func');
    const element = api(this.node);
    if (!element) return false;
    console.log('element');

    const instance = Object.values(element).filter(actionee => actionee.isComponentActionee).sort((a, b) => b.priority - a.priority)[0];
    console.log('filter', Object.values(element));
    if (!instance) return false;
    console.log('instance');

    this._type = Type.COMPONENT;
    if (this._headings.length) {
      const level = Math.min.apply(null, this._headings.map(heading => heading.level));
      this._level = level - 1;
    }
    this._label = instance.label;
    this._component = instance.component;
    return true;
  }

  _getHeading () {
    if (!this._headings.length) return false;
    const labels = [];
    this._headings.forEach(heading => {
      if (heading.level <= this._level) {
        labels.unshift(heading.label);
        this._level = heading.level - 1;
      }
    });
    if (!labels.length) return false;
    this._type = Type.HEADING;
    this._label = labels.join(' ＞ ');
    return true;
  }

  analyse () {
    console.log('--- node', this.node);

    this._parseHeadings();
    if (this._getComponent()) return;
    if (this._getHeading()) return;
    if (this.node !== this.target) return;

    const label = this.node.textContent.trim();
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
}

export { Member };
