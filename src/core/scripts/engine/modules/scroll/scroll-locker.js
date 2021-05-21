import { ns } from '../../../global/namespace.js';
import state from '../../state';

class ScrollLocker {
  constructor () {
    this._isLocked = false;
    this._scrollY = 0;
    state.onPopulate = this.lock.bind(this);
    state.onEmpty = this.unlock.bind(this);
  }

  get isLocked () {
    return this._isLocked;
  }

  lock () {
    if (!this._isLocked) {
      this._isLocked = true;
      this._scrollY = window.scrollY;
      document.body.style.top = this._scrollY * -1 + 'px';
      document.documentElement.setAttribute(ns.attr('scrolling'), 'false');
    }
  }

  unlock () {
    if (this._isLocked) {
      this._isLocked = false;
      document.documentElement.removeAttribute(ns.attr('scrolling'));
      document.body.style.top = '';
      window.scroll(0, this._scrollY);
    }
  }
}

export { ScrollLocker };
