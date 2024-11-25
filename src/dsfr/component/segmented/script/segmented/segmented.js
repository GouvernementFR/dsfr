import api from '../../api.js';
import { SegmentedSelector } from './segmented-selector.js';
import { SegmentedEmission } from './segmented-emission.js';

class Segmented extends api.core.Instance {
  static get instanceClassName () {
    return 'Segmented';
  }

  init () {
    this.elements = this.node.querySelector(SegmentedSelector.SEGMENTED_ELEMENTS);
    this.legend = this.node.querySelector(SegmentedSelector.SEGMENTED_LEGEND);
    this.addAscent(SegmentedEmission.ADDED, this.resize.bind(this));
    this.addAscent(SegmentedEmission.REMOVED, this.resize.bind(this));
    this._isLegendInline = this.legend && this.legend.classList.contains(`${api.prefix}-segmented__legend--inline`);
    this.isResizing = true;
  }

  resize () {
    const SEGMENTED_VERTICAL = `${api.prefix}-segmented--vertical`;
    const LEGEND_INLINE = `${api.prefix}-segmented__legend--inline`;
    const gapOffset = 16;

    this.removeClass(SEGMENTED_VERTICAL);

    if (this._isLegendInline) {
      this.legend.classList.add(LEGEND_INLINE);

      if (this.node.offsetWidth > this.node.parentNode.offsetWidth || (this.elements.scrollWidth + this.legend.offsetWidth + gapOffset) > this.node.parentNode.offsetWidth) {
        this.legend.classList.remove(LEGEND_INLINE);
      }
    }

    if (this.elements.offsetWidth > this.node.parentNode.offsetWidth || this.elements.scrollWidth > this.node.parentNode.offsetWidth) {
      this.addClass(SEGMENTED_VERTICAL);
    } else {
      this.removeClass(SEGMENTED_VERTICAL);
    }
  }
}

export { Segmented };
