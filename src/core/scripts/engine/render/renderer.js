import state from '../state.js';
import { Module } from '../module';
import { Collection } from '../../global/collection';

class Renderer extends Module {
  constructor () {
    super('render');
    this.rendering = this.render.bind(this);
    this.nexts = [];
  }

  activate () {
    window.requestAnimationFrame(this.rendering);
  }

  request (closure) {
    this.nexts.push(closure);
  }

  render () {
    if (!state.isActive) return;
    window.requestAnimationFrame(this.rendering);
    this.forEach((instance) => instance.render());
    if (!this.nexts.length) return;
    const nexts = this.nexts.slice();
    this.nexts.length = 0;
    nexts.forEach((next) => { if (next) next(); });
  }
}

export { Renderer };
