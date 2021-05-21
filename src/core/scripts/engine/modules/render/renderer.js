import state from '../../state.js';

class Renderer {
  constructor () {
    this.closures = [];
    this.nexts = [];
    this.rendering = this.render.bind(this);
    state.activations.add(this.render.bind(this));
  }

  add (closure) {
    this.closures.push(closure);
    const remove = () => {
      const index = this.closures.indexOf(closure);
      if (index !== -1) this.closures.splice(index, 1);
    };
    return remove;
  }

  next (closure, frame) {
    frame = frame === undefined ? 0 : frame - 1;
    if (this.nexts[frame] === undefined) this.nexts[frame] = [];
    this.nexts[frame].push(closure);
  }

  render () {
    if (!state.isActive) return;
    window.requestAnimationFrame(this.rendering);
    for (const instance of state.renderables.collection) instance.render();
    for (const closure of this.closures) closure.call();
    const nexts = this.nexts.shift();
    if (nexts) {
      for (const closure of nexts) closure.call();
    }
  }
}

export { Renderer };
