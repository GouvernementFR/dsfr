import state from '../state.js';
import { Module } from '../module';
import { Collection } from '../../global/collection';

class Renderer extends Module {
  constructor () {
    super('render');
    this.rendering = this.render.bind(this);
    this.nexts = new Collection();
  }

  activate () {
    window.requestAnimationFrame(this.rendering);
  }

  request (instance) {
    this.nexts.add(instance);
  }

  render () {
    if (!state.isActive) return;
    window.requestAnimationFrame(this.rendering);
    this.forEach((instance) => instance.render());
    if (!this.nexts.length) return;
    this.nexts.forEach((instance) => instance.next());
    this.nexts.clear();
  }
}

export { Renderer };
