import state from '../../state';

class Resizer {
  constructor () {
    this.requireResize = true;
    window.addEventListener('resize', this._resize.bind(this));
    window.addEventListener('orientationchange', this._resize.bind(this));
    state.renderables.add(this.resize.bind(this));
  }

  _resize () {
    this.requireResize = true;
  }

  resize () {
    if (!this.requireResize) return;
    state.resizables.execute();
  }
}

export { Resizer };
