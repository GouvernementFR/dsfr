import api from '../../api.js';
import { TableEmission } from './table-emission.js';

class TableRow extends api.core.Instance {
  static get instanceClassName () {
    return 'TableRow';
  }

  init () {
    this.addDescent(TableEmission.COL_SELECT, this.rowSelect.bind(this));
  }

  rowSelect (col) {
    const cellCol = this.node.childNodes[col.index];
    if (!cellCol || !cellCol.classList) return;
    if (cellCol.classList.contains('fr-cell--fixed') && cellCol.querySelector('.fr-checkbox-group input[type="checkbox"]')) {
      cellCol.querySelector('.fr-checkbox-group input[type="checkbox"]').checked = !col.value;
      cellCol.querySelector('.fr-checkbox-group input[type="checkbox"]').click();
    }
  }
}

export { TableRow };
