class Renderer {
  constructor () {
    this.closures = [];
    this.nexts = [];
    this.rendering = this.render.bind(this);
    this.render();
  }

  static add (closure) {
    Renderer.instance.closures.push(closure);
    const remove = () => {
      const index = Renderer.instance.closures.indexOf(closure);
      if (index !== -1) Renderer.instance.closures.splice(index, 1);
    };
    return remove;
  }

  static next (closure) {
    Renderer.instance.nexts.push(closure);
  }

  render () {
    window.requestAnimationFrame(this.rendering);
    for (const closure of this.closures) closure.call();
    const nexts = this.nexts.slice();
    this.nexts.length = 0;
    for (const closure of nexts) closure.call();
  }
}

Renderer.instance = new Renderer();

export { Renderer };
