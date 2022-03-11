import { Module } from '../module.js';

class Resizer extends Module {
  constructor () {
    super('resize');
    this.requireResize = false;
    this.resizing = this.resize.bind(this);
    const requesting = this.request.bind(this);
    if (document.fonts) {
      document.fonts.ready.then(requesting);
    }
    window.addEventListener('resize', requesting);
    window.addEventListener('orientationchange', requesting);
  }

  activate () {
    this.request();
  }

  request () {
    if (this.requireResize) return;
    this.requireResize = true;
    window.requestAnimationFrame(this.resizing);
  }

  resize () {
    if (!this.requireResize) return;
    this.forEach((instance) => instance.resize());
    this.requireResize = false;
  }
}

export { Resizer };
