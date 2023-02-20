import api from '../../../api';
import normalize from './normalize';

const NODE_POSITION = Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINED_BY;

class Hierarchy {
  constructor (node) {
    this._node = node;
    this._process();
  }

  _process () {
    console.log('#####################');
    console.log(this._node);
    this._chunks = [];
    this._level = 6;
    this._components = [];
    this._label = this._analyse(this._node, this._node);

    let node = this._node.parentNode;

    while (document.documentElement.contains(node) && node !== document.documentElement && this._level > 1) {
      console.log('while', this._chunks);
      this._analyse(node, this._node);
      node = node.parentNode;
    }

    this._title = normalize(this._chunks.filter(chunk => chunk).join(' ＞ '));
    console.log('++++', this._chunks, this._components);
    this._component = normalize(this._components.join(' ＞ '));

    console.log('====================');
  }

  _analyse (node, target) {
    console.log('--- node', node);

    const selector = Array.from({ length: this._level - 1 }, (v, i) => `h${i + 2}`).join(',');
    const headings = [...node.querySelectorAll(selector)].filter(heading => (target.compareDocumentPosition(heading) & NODE_POSITION) > 0).reverse();

    if (typeof api === 'function') {
      const element = api(node);
      if (element) {
        const instance = Object.values(element).filter(actionee => actionee.isComponentActionee).sort((a, b) => b.priority - a.priority)[0];
        console.log('filter', Object.values(element));
        if (instance) {
          if (headings.length) {
            const level = Math.min.apply(null, headings.map(heading => Number(heading.tagName.charAt(1))));
            this._level = level - 1;
          }
          console.log('instance', instance, instance.label);
          this._components.unshift(instance.component);
          this._chunks.unshift(instance.label);
          return instance.title;
        }
      }
    }

    if (headings.length) {
      const label = [];
      headings.forEach(heading => {
        const level = Number(heading.tagName.charAt(1));
        if (level <= this._level) {
          const text = heading.textContent.trim();
          label.unshift(text);
          this._chunks.unshift(text);
          this._level = level - 1;
        }
      });
      console.log('chunks', this._chunks);
      if (node === target) return label.join(' ＞ ');
      else return;
    }

    if (node !== target) return null;
    const text = node.textContent.trim();
    if (!text) return null;
    console.log('last', text);
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
