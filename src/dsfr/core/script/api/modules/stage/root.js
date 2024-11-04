import { Element } from './element.js';
import ns from '../../utilities/namespace.js';
import { RootEmission } from './root-emission';
import { getKeyCode } from '../register/key-codes';

class Root extends Element {
  constructor () {
    super(document.documentElement, 'root');
    this.node.setAttribute(ns.attr('js'), true);
    this.listen();
  }

  listen () {
    // TODO v2 => listener au niveau des éléments qui redistribuent aux instances.
    document.documentElement.addEventListener('click', this.click.bind(this), { capture: true });
    document.documentElement.addEventListener('keydown', this.keydown.bind(this), { capture: true });
    document.documentElement.addEventListener('keyup', this.keyup.bind(this), { capture: true });
  }

  click (e) {
    this.emit(RootEmission.CLICK, e.target);
  }

  keydown (e) {
    this.emit(RootEmission.KEYDOWN, getKeyCode(e.keyCode));
  }

  keyup (e) {
    this.emit(RootEmission.KEYUP, getKeyCode(e.keyCode));
  }
}

export { Root };
