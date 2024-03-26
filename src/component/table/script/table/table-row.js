import api from '../../api.js';
import { TableEmission } from './table-emission.js';

class TableRow extends api.core.Instance {
  static get instanceClassName () {
    return 'TableRow';
  }

  init () {
    this.addDescent(TableEmission.COL_SELECT, this.colSelect.bind(this));
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
