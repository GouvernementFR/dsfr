import { Module } from '../module';

class Resizer extends Module {
  constructor () {
    super('resize');
    this.requireResize = true;
    this.resizing = this.resize.bind(this);
    const _resizing = this._resize.bind(this);
    window.addEventListener('resize', _resizing);
    window.addEventListener('orientationchange', _resizing);
  }

  activate () {
    this._resize();
  }

  _resize () {
    if (!this.requireResize) window.requestAnimationFrame(this.resizing);
    this.requireResize = true;
  }

  resize () {
    if (!this.requireResize) return;
    this.forEach((item) => item.resize());
    this.resizables.execute();
    this.requireResize = false;
  }
}

export { Resizer };
