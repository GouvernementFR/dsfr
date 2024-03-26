import api from '../../api.js';
import { TableSelector } from './table-selector.js';

class TableRowSelect extends api.core.Instance {
  static get instanceClassName () {
    return 'TableRowSelect';
  }

  init () {
    // this.listenClick();
    this.node.addEventListener('change', this.handleChange.bind(this));
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

  handleChange (event) {
    this.isChecked = !this._isChecked;
  }

  toggleRowSelection (value) {
    if (!this.node.closest('td')) return;
    const closestRow = this.node.closest(TableSelector.ROW);
    closestRow.setAttribute('aria-selected', value);
  }
}

export { TableRowSelect };
