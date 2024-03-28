import api from '../../api.js';
import { TableSelector } from './table-selector.js';
import { TableEmission } from './table-emission.js';

class TableRowSelect extends api.core.Instance {
  static get instanceClassName () {
    return 'TableRowSelect';
  }

  init () {
    this.listenClick();
    this._isChecked = this.isChecked;
    if (this._isChecked) this.toggleRowSelection(this._isChecked);
  }

  get isChecked () {
    return this.node.checked;
  }

  set isChecked (value) {
    this._isChecked = value;
    this.toggleRowSelection(value);
  }

  handleClick () {
    this.isChecked = !this._isChecked;
  }

  toggleRowSelection (value) {
    if (!this.node.closest('td')) return;
    this.ascend(TableEmission.ROW_SELECT, this);
    this.node.closest(TableSelector.ROW).setAttribute('aria-selected', this.isChecked);
  }
}

export { TableRowSelect };
