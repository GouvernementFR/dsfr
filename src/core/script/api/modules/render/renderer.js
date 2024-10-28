import state from '../../state.js';
import { Module } from '../module.js';
import { Collection } from '../../utilities/collection.js';
import { rootDispatch } from '../../utilities/dom/dispatch.js';
import { RootEvent } from '../stage/root-event.js';

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
    const nexts = this.nexts.clone();
    this.nexts.clear();
    nexts.forEach((instance) => instance.next());
    rootDispatch(RootEvent.RENDER);
  }
}

export { Renderer };
