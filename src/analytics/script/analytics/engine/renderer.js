class Renderer {
  constructor () {
    this._closures = [];
    this._rendering = this.render.bind(this);
    requestAnimationFrame(this._rendering);
  }

  add (closure) {
    this._closures.push(closure);
  }

  render () {
    this._closures.forEach(closure => closure.call());
    requestAnimationFrame(this._rendering);
  }
}

const renderer = new Renderer();

export default renderer;
