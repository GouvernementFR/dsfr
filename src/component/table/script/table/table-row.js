import api from '../../api.js';

class TableRow extends api.core.Instance {
  static get instanceClassName () {
    return 'TableRow';
  }

  init () {
    this.isResizing = true;
    if (api.checkbox) {
      this.listenCheckbox();
      this._initRowSelection();
    }
  }

  listenCheckbox () {
    this.listen(api.checkbox.CheckboxEvent.CHANGE, this._handleCheckboxChange.bind(this), { capture: true });
  }

  _handleCheckboxChange (event) {
    if (event.target.name === 'row-select') {
      this.setAriaSelected(event.target.checked);
    }
  }

  _initRowSelection () {
    const rowSelect = this.node.querySelector(api.checkbox.CheckboxSelector.INPUT);
    if (rowSelect) this.setAriaSelected(rowSelect.checked);
  }

  resize () {
    const height = this.getRect().height + 2;
    this.setProperty('--row-height', `${height}px`);
  }

  setAriaSelected (value) {
    this.setAttribute('aria-selected', value);
  }
}

export { TableRow };
