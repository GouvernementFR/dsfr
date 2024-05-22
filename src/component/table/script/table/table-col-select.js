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
    // const index = [...this.node.closest('tr').childNodes].indexOf(this.node.closest('th'));
    // Trick for IE11 for accessing the Array.prototype
    const index = [].slice.call(this.node.closest('tr').childNodes).indexOf(this.node.closest('th'));
    this.ascend(TableEmission.COL_SELECT, { index, value });
  }

  toggleRowSelection (row) {
    if (this.node.checked && !row.isChecked) {
      this._isChecked = false;
      this.node.checked = false;
    }
  }
}

export { TableColSelect };
