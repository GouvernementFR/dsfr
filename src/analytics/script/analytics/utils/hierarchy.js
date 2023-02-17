import api from '../../../api';
import normalize from './normalize';

const NODE_POSITION = Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY;

class Hierarchy {
  constructor (node) {
    this._node = node;
    this._chunks = [];
    this._level = 6;
    this._components = [];
    this._process();
  }

  _process () {
    this._label = this._analyse(this._node, this._node);

    let node = this._node.parentNode;

    while (document.documentElement.contains(node) && node !== document.documentElement && this._level > 1) {
      console.log('while');
      this._analyse(node, this._node);
      node = node.parentNode;
    }

    this._title = normalize(this._chunks.join(' ＞ '));
    this._component = normalize(this._components.join(' ＞ '));
  }

  _analyse (node, target) {
    console.log('--- node', node);
    if (typeof api === 'function') {
      // const element = api(node);
      // TODO get element title from component
      // this._components.unshift()
    }

    const selector = Array.from({ length: this._level - 1 }, (v, i) => `h${i + 2}`).join(',');
    const headings = [...node.querySelectorAll(selector)].filter(heading => (target.compareDocumentPosition(heading) & NODE_POSITION) > 0).reverse();

    if (headings.length) {
      const label = [];
      headings.forEach(heading => {
        const level = Number(heading.tagName.charAt(1));
        if (level <= this._level) {
          const text = heading.innerText;
          label.unshift(text);
          this._chunks.unshift(text);
          this._level = level - 1;
        }
      });
      if (node === target) return label.join(' ＞ ');
      else return;
    }

    if (node !== target) return null;
    const text = node.innerText;
    if (!text) return null;
    this._chunks.unshift(text);
    return text;
  }

  get label () {
    return this._label;
  }

  get title () {
    return this._title;
  }

  get component () {
    return this._component;
  }
}

export { Hierarchy };
