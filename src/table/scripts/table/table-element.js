import api from '../../api.js';
import { TableSelectors } from './table-selectors';
import { TableEmissions } from './table-emissions';

const SCROLL_OFFSET = 8; // valeur en px du scroll avant laquelle le shadow s'active ou se desactive

class TableElement extends api.core.Instance {
  init () {
    this.listen('scroll', this.scroll.bind(this));
    this.content = this.querySelector('tbody');

    this.isResizing = true;
  }

  get isScrolling () {
    return this._isScrolling;
  }

  set isScrolling (value) {
    if (this._isScrolling === value) return;
    const isScrollable = this.ascend(TableEmissions.SCROLLABLE);
    if (isScrollable.indexOf(false) > -1) return;
    this._isScrolling = value;

    if (value) {
      this.addClass(TableSelectors.SHADOW);
      this.scroll();
    } else {
      this.removeClass(TableSelectors.SHADOW);
      this.removeClass(TableSelectors.SHADOW_LEFT);
      this.removeClass(TableSelectors.SHADOW_RIGHT);
    }
  }

  /* ajoute la classe fr-table__shadow-left ou fr-table__shadow-right sur fr-table en fonction d'une valeur de scroll et du sens (right, left) */
  scroll () {
    const isMin = this.node.scrollLeft <= SCROLL_OFFSET;
    const max = this.content.offsetWidth - this.node.offsetWidth - SCROLL_OFFSET;
    const isMax = Math.abs(this.node.scrollLeft) >= max;

    console.log(isMin, isMax, this.node.scrollLeft, max, SCROLL_OFFSET);
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    const minSelector = isRtl ? TableSelectors.SHADOW_RIGHT : TableSelectors.SHADOW_LEFT;
    const maxSelector = isRtl ? TableSelectors.SHADOW_LEFT : TableSelectors.SHADOW_RIGHT;

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
    this.isScrolling = this.content.offsetWidth > this.node.offsetWidth;
  }
}

export { TableElement };
