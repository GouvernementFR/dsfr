import api from '../../api.js';
import { TableSelector } from './table-selector.js';
import { TableEmission } from './table-emission.js';

class TableRowSelect extends api.core.Instance {
  static get instanceClassName () {
    return 'TableRowSelect';
  }

  init () {
    this.node.addEventListener('change', this.handleChange.bind(this));
    this._isChecked = this.isChecked;
    if (this._isChecked) this.toggleRowSelection();
  }

  get isChecked () {
    return this.node.checked;
  }

  set isChecked (value) {
    this._isChecked = value;
  }

  handleChange () {
    this.isChecked = !this._isChecked;
    this.toggleRowSelection();
  }

  toggleRowSelection () {
    if (!this.node.closest('td')) return;
    this.ascend(TableEmission.ROW_SELECT, this);

    const closestRow = this.node.closest(TableSelector.ROW);
    if (this.isChecked) {
      closestRow.setAttribute('aria-selected', this.isChecked);
    } else {
      closestRow.removeAttribute('aria-selected');
    };
  }
}

export { TableRowSelect };
