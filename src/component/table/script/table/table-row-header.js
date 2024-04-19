import api from '../../api.js';
import { TableEmission } from './table-emission.js';

class TableRowHeader extends api.core.Instance {
  static get instanceClassName () {
    return 'TableRowHeader';
  }

  init () {
    this.isResizing = true;
    this.width = 0;
  }

  resize () {
    // debugger;
    const width = this.getRect().width;
    if (this.width === width) return;
    this.width = width;
    this.ascend(TableEmission.ROW_HEADER_WIDTH, width);
  }
}

export { TableRowHeader };
