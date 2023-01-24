import ns from '../../utilities/namespace.js';
import { Module } from '../module.js';

class ScrollLocker extends Module {
  constructor () {
    super('lock');
    this._isLocked = false;
    this._scrollY = 0;
    this.onPopulate = this.lock.bind(this);
    this.onEmpty = this.unlock.bind(this);
    this.previousBodyPaddingRight = undefined;
  }

  get isLocked () {
    return this._isLocked;
  }

  lock () {
    if (!this._isLocked) {
      this._isLocked = true;
      this._scrollY = window.scrollY;
      const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.setAttribute(ns.attr('scrolling'), 'false');
      document.body.style.top = `${this._scrollY * -1}px`;
      if (this.previousBodyPaddingRight === undefined) {
        this.previousBodyPaddingRight = document.body.style.paddingRight;
        if (scrollBarGap > 0) {
          const computedBodyPaddingRight = parseInt(getComputedStyle(document.body).getPropertyValue('padding-right'), 10);
          document.body.style.paddingRight = `${computedBodyPaddingRight + scrollBarGap}px`;
          document.body.style.setProperty('--scrollbar-width', `${scrollBarGap}px`);
        }
      }
    }
  }

  unlock () {
    if (this._isLocked) {
      this._isLocked = false;
      document.documentElement.removeAttribute(ns.attr('scrolling'));
      document.body.style.top = '';
      window.scrollTo(0, this._scrollY);
      if (this.previousBodyPaddingRight !== undefined) {
        document.body.style.paddingRight = this.previousBodyPaddingRight;
        document.body.style.removeProperty('--scrollbar-width');
        this.previousBodyPaddingRight = undefined;
      }
    }
  }

  move (value) {
    if (this._isLocked) {
      this._scrollY += value;
      document.body.style.top = `${this._scrollY * -1}px`;
    } else {
      window.scrollTo(0, window.scrollY + value);
    }
  }
}

export { ScrollLocker };
