import api from '../../api.js';
import { TabSelector } from './tab-selector';
import { TabKeys } from './tab-keys';
import { TabEmission } from './tab-emission';

const FOCALIZE_OFFSET = 16;
const SCROLL_OFFSET = 16; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive

class TabsList extends api.core.Instance {
  static get instanceClassName () {
    return 'TabsList';
  }

  init () {
    this.listen('scroll', this.scroll.bind(this));
    this.listenKey(api.core.KeyCodes.RIGHT, this.ascend.bind(this, TabEmission.PRESS_KEY, TabKeys.RIGHT), true, true);
    this.listenKey(api.core.KeyCodes.LEFT, this.ascend.bind(this, TabEmission.PRESS_KEY, TabKeys.LEFT), true, true);
    this.listenKey(api.core.KeyCodes.HOME, this.ascend.bind(this, TabEmission.PRESS_KEY, TabKeys.HOME), true, true);
    this.listenKey(api.core.KeyCodes.END, this.ascend.bind(this, TabEmission.PRESS_KEY, TabKeys.END), true, true);
    this.isResizing = true;
  }

  focalize (btn) {
    const btnRect = btn.getRect();
    const listRect = this.getRect();
    const actualScroll = this.node.scrollLeft;
    if (btnRect.left < listRect.left) this.node.scrollTo(actualScroll - listRect.left + btnRect.left - FOCALIZE_OFFSET, 0);
    else if (btnRect.right > listRect.right) this.node.scrollTo(actualScroll - listRect.right + btnRect.right + FOCALIZE_OFFSET, 0);
  }

  get isScrolling () {
    return this._isScrolling;
  }

  set isScrolling (value) {
    if (this._isScrolling === value) return;
    this._isScrolling = value;
    this.apply();
  }

  apply () {
    if (this._isScrolling) {
      this.addClass(TabSelector.SHADOW);
      this.scroll();
    } else {
      this.removeClass(TabSelector.SHADOW_RIGHT);
      this.removeClass(TabSelector.SHADOW_LEFT);
      this.removeClass(TabSelector.SHADOW);
    }
  }

  /* ajoute la classe fr-table__shadow-left ou fr-table__shadow-right sur fr-table en fonction d'une valeur de scroll et du sens (right, left) */
  scroll () {
    const scrollLeft = Math.abs(this.node.scrollLeft);
    const isMin = scrollLeft <= SCROLL_OFFSET;
    const max = this.node.scrollWidth - this.node.clientWidth - SCROLL_OFFSET;
    const isMax = Math.abs(scrollLeft) >= max;
    const isRtl = getComputedStyle(this.node).direction === 'rtl';
    const minSelector = isRtl ? TabSelector.SHADOW_RIGHT : TabSelector.SHADOW_LEFT;
    const maxSelector = isRtl ? TabSelector.SHADOW_LEFT : TabSelector.SHADOW_RIGHT;

    if (isMin) {
      this.removeClass(minSelector);
    } else {
      this.addClass(minSelector);
    }

    if (isMax) {
      this.removeClass(maxSelector);
    } else {
      this.addClass(maxSelector);
    }
  }

  resize () {
    this.isScrolling = this.node.scrollWidth > this.node.clientWidth + SCROLL_OFFSET;
    const height = this.getRect().height;
    this.setProperty('--tabs-list-height', `${height}px`);
    this.ascend(TabEmission.LIST_HEIGHT, height);
  }

  dispose () {
    this.isScrolling = false;
  }
}

export { TabsList };
