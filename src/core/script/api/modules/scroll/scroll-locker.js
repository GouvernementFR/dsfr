import ns from '../../utilities/namespace.js';
import { Module } from '../module.js';

class ScrollLocker extends Module {
  constructor () {
    super('lock');
    this._isLocked = false;
    this._scrollY = 0;
    this.onPopulate = this.lock.bind(this);
    this.onEmpty = this.unlock.bind(this);
  }

  get isLocked () {
    return this._isLocked;
  }

  lock () {
    if (!this._isLocked) {
      this._isLocked = true;
      this._scrollY = window.scrollY;
      if (this.isLegacy) document.body.style.top = this._scrollY * -1 + 'px';
      else document.body.style.setProperty('--scroll-top', this._scrollY * -1 + 'px');
      document.documentElement.setAttribute(ns.attr('scrolling'), 'false');
    }
  }

  unlock () {
    if (this._isLocked) {
      this._isLocked = false;
      document.documentElement.removeAttribute(ns.attr('scrolling'));
      if (this.isLegacy) document.body.style.top = '';
      else document.body.style.removeProperty('--scroll-top');
      window.scroll(0, this._scrollY);
    }
  }
}

export { ScrollLocker };
