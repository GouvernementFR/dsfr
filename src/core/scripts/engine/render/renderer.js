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

  render () {
    if (!state.isActive) return;
    window.requestAnimationFrame(this.rendering);
    this.forEach((instance) => instance.render());
    this.nexts.forEach((instance) => instance.next());
  }
}

export { Renderer };
