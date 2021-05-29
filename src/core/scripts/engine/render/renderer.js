import state from '../state.js';
import { Module } from '../module';

class Renderer extends Module {
  constructor () {
    super('render');
    this.rendering = this.render.bind(this);
  }

  activate () {
    window.requestAnimationFrame(this.rendering);
  }

  render () {
    if (!state.isActive) return;
    window.requestAnimationFrame(this.rendering);
    this.forEach((item) => item.render());
  }
}

export { Renderer };
