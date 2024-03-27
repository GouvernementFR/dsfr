import api from '../../api.js';
import { TableEmission } from './table-emission.js';

class TableRow extends api.core.Instance {
  static get instanceClassName () {
    return 'TableRow';
  }

  init () {
    this.addDescent(TableEmission.ROW_SELECT, this.rowSelect.bind(this));
    this.addDescent(TableEmission.COL_SELECT, this.colSelect.bind(this));
  }

  rowSelect (row) {
    if (this.node.parentNode.tagName !== 'TBODY') return;
    this.node.parentNode.children[row.index].setAttribute('aria-selected', row.value);
  }

  colSelect (col) {
    const cellCol = this.node.children[col.index];
    if (cellCol.tagName === 'TH') return;

    if (cellCol.querySelector('.fr-checkbox-group input[type="checkbox"]')) {
      cellCol.querySelector('.fr-checkbox-group input[type="checkbox"]').click();
      cellCol.querySelector('.fr-checkbox-group input[type="checkbox"]').checked = col.value;
    } else {
      cellCol.classList.remove('fr-cell__selected');
      if (col.value) cellCol.classList.add('fr-cell__selected');
    }
  }
}

export { TableRow };
