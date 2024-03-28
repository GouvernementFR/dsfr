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

  rowSelect (selectCheckbox) {
    if (this.node.parentNode.tagName !== 'TBODY') return;

    const rowIndex = [...selectCheckbox.node.closest('tbody').children].indexOf(selectCheckbox.node.closest('tr'));
    if (this.node.parentNode.children[rowIndex].querySelector('.fr-btn--expand')) {
      const subline = this.node.parentNode.querySelector(`#${this.node.parentNode.children[rowIndex].querySelector('.fr-btn--expand').getAttribute('aria-controls')}`);
      if (subline) {
        const sublinesCheckboxes = subline.querySelectorAll('.fr-checkbox-group input[type="checkbox"]');
        if (sublinesCheckboxes.length) {
          sublinesCheckboxes.forEach(checkbox => {
            checkbox.checked = !selectCheckbox.isChecked;
            checkbox.click();
          });
        }
      }
    }
  }

  colSelect (col) {
    const cellCol = this.node.children[col.index];
    if (cellCol.classList.contains('fr-cell__actionable--select') && cellCol.querySelector('.fr-checkbox-group input[type="checkbox"]')) {
      cellCol.querySelector('.fr-checkbox-group input[type="checkbox"]').checked = !col.value;
      cellCol.querySelector('.fr-checkbox-group input[type="checkbox"]').click();
    } else {
      cellCol.classList.remove('fr-cell__selected');
      if (col.value) cellCol.classList.add('fr-cell__selected');
    }
  }
}

export { TableRow };
