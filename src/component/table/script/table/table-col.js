import api from '../../api.js';
// import { TableEmission } from './table-emission.js';

class TableCol extends api.core.Instance {
  static get instanceClassName () {
    return 'TableCol';
  }

  init () {
    this.listen('mouseover', this.handlingHover.bind(this));
    // this.listen('mouseleave', this.handlingLeave.bind(this));
    // this._colIndex = [...this.node.closest('tr').children].indexOf(this.node.closest('th'));
  }

  handlingHover () {
    this.style.setProperty('--head-col-width', (this.node.offsetWidth) + 'px');
    this.style.setProperty('--head-col-position-left', (this.node.offsetLeft) + 'px');
    // this.ascend(TableEmission.COL_HOVER, { index: this._colIndex });
  }

  handlingLeave () {
    // this.ascend(TableEmission.COL_OUT, { index: this._colIndex });
  }
}

export { TableCol };
