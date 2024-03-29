import api from '../../api.js';
import { TableEmission } from './table-emission.js';

class TableColSelect extends api.core.Instance {
  static get instanceClassName () {
    return 'TableColSelect';
  }

  init () {
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
    this.ascend(TableEmission.COL_SELECT, { index, value });
  }
}

export { TableColSelect };
