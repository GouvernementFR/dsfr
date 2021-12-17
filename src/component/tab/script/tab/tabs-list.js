import api from '../../api.js';
import { TabSelector } from './tab-selector';

const FOCALIZE_OFFSET = 16;
const SCROLL_OFFSET = 16; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive

class TabsList extends api.core.Instance {
  static get instanceClassName () {
    return 'TabsList';
  }

  init () {
    this.listen('scroll', this.scroll.bind(this));
    this.isResizing = true;
  }

  get group () {
    return this.element.getAscendantInstance('TabsGroup', 'TabsList');
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
    if (!this.group) return;
    if (this._isScrolling) {
      this.group.addClass(TabSelector.SHADOW);
      this.scroll();
    } else {
      this.group.removeClass(TabSelector.SHADOW_RIGHT);
      this.group.removeClass(TabSelector.SHADOW_LEFT);
      this.group.removeClass(TabSelector.SHADOW);
    }
  }

  /* ajoute la classe fr-table__shadow-left ou fr-table__shadow-right sur fr-table en fonction d'une valeur de scroll et du sens (right, left) */
  scroll () {
    if (!this.group) return;
    const scrollLeft = this.node.scrollLeft;
    const isMin = scrollLeft <= SCROLL_OFFSET;
    const max = this.node.scrollWidth - this.node.clientWidth - SCROLL_OFFSET;

    const isMax = Math.abs(scrollLeft) >= max;
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    const minSelector = isRtl ? TabSelector.SHADOW_RIGHT : TabSelector.SHADOW_LEFT;
    const maxSelector = isRtl ? TabSelector.SHADOW_LEFT : TabSelector.SHADOW_RIGHT;

    if (isMin) {
      this.group.removeClass(minSelector);
    } else {
      this.group.addClass(minSelector);
    }

    if (isMax) {
      this.group.removeClass(maxSelector);
    } else {
      this.group.addClass(maxSelector);
    }
  }

  resize () {
    this.isScrolling = this.node.scrollWidth > this.node.clientWidth + SCROLL_OFFSET;
  }

  dispose () {
    this.isScrolling = false;
  }
}

export { TabsList };
