import { ns } from '../global/namespace.js';

class Body {
  constructor () {
    this.instances = [];
    this._scrolling = true;
    this.scrollY = 0;
  }

  get scrolling () {
    return this._scrolling;
  }

  preventScrolling (instance) {
    const index = this.instances.indexOf(instance);
    if (index > -1) return;
    this.instances.push(instance);
    if (this._scrolling) {
      this._scrolling = false;
      this.scrollY = window.scrollY;
      document.body.style.top = this.scrollDistance * -1 + 'px';
      document.documentElement.setAttribute(ns.attr('scrolling'), 'false');
    }
  }

  releaseScrolling (instance) {
    const index = this.instances.indexOf(instance);
    if (index === -1) return;
    this.instances.splice(index, 1);
    if (!this._scrolling) {
      this._scrolling = true;
      document.documentElement.removeAttribute(ns.attr('scrolling'));
      document.body.style.top = '';
      window.scroll(0, this.scrollY);
    }
  }
}

const body = new Body();

export default body;
