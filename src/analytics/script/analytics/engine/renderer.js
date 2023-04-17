class Renderer {
  constructor () {
    this._renderables = [];
    this._rendering = this.render.bind(this);
    requestAnimationFrame(this._rendering);
  }

  add (renderable) {
    const index = this._renderables.indexOf(renderable);
    if (index === -1) this._renderables.push(renderable);
  }

  remove (renderable) {
    const index = this._renderables.indexOf(renderable);
    if (index > -1) this._renderables.splice(index, 1);
  }

  render () {
    this._renderables.forEach(renderable => renderable.render());
    requestAnimationFrame(this._rendering);
  }
}

const renderer = new Renderer();

export default renderer;
