import api from '../../api.js';
import { TableEmission } from './table-emission.js';

class TableColSelect extends api.core.Instance {
  static get instanceClassName () {
    return 'TableColSelect';
  }

  init () {
    this.addDescent(TableEmission.ROW_SELECT, this.toggleRowSelection.bind(this));
    this.listenClick();
    this._isChecked = this.isChecked;
    if (this._isChecked) this.toggleColSelection(this._isChecked);
  }

  get isChecked () {
    return this.node.checked;
  }

  set isChecked (value) {
    this._isChecked = value;
    this.toggleColSelection(value);
  }

  handleClick () {
    this.isChecked = !this._isChecked;
  }

  toggleColSelection (value) {
    const index = [...this.node.closest('tr').children].indexOf(this.node.closest('th'));
    const colHeaderCell = this.node.closest('th');
    if (colHeaderCell) {
      colHeaderCell.classList.remove('fr-cell__selected');
      if (this.isChecked) colHeaderCell.classList.add('fr-cell__selected');
    }
    this.ascend(TableEmission.COL_SELECT, { index, value });
  }

  toggleRowSelection (row) {
    const colIndex = [...this.node.closest('tr').children].indexOf(this.node.closest('th'));
    if (colIndex === 0 && this.node.checked && !row.isChecked) {
      const colHeaderCell = this.node.closest('th');
      this._isChecked = false;
      this.node.checked = false;
      if (colHeaderCell) colHeaderCell.classList.remove('fr-cell__selected');
    }
  }
}

export { TableColSelect };
