import ns from '../../utilities/namespace.js';
import { Module } from '../module.js';
import { rootDispatch } from '../../utilities/dom/dispatch.js';
import { RootEvent } from '../stage/root-event.js';

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
      const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
      document.documentElement.setAttribute(ns.attr('scrolling'), 'false');
      document.body.style.top = `${-this._scrollY}px`;
      this.behavior = getComputedStyle(document.documentElement).getPropertyValue('scroll-behavior');
      if (this.behavior === 'smooth') document.documentElement.style.scrollBehavior = 'auto';
      if (scrollBarGap > 0) {
        document.documentElement.style.setProperty('--scrollbar-width', `${scrollBarGap}px`);
      }
      rootDispatch(RootEvent.SCROLL_LOCK);
    }
  }

  unlock () {
    if (this._isLocked) {
      this._isLocked = false;
      document.documentElement.removeAttribute(ns.attr('scrolling'));
      document.body.style.top = '';
      window.scrollTo(0, this._scrollY);
      if (this.behavior === 'smooth') document.documentElement.style.removeProperty('scroll-behavior');
      document.documentElement.style.removeProperty('--scrollbar-width');
      rootDispatch(RootEvent.SCROLL_UNLOCK);
    }
  }

  move (value) {
    if (this._isLocked) {
      this._scrollY += value;
      document.body.style.top = `${-this._scrollY}px`;
    } else {
      window.scrollTo(0, window.scrollY + value);
    }
  }
}

export { ScrollLocker };
