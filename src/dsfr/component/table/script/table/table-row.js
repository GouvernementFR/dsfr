import api from '../../api.js';
import { CheckboxEmission } from '../../../checkbox/script/checkbox/checkbox-emission.js';

class TableRow extends api.core.Instance {
  static get instanceClassName () {
    return 'TableRow';
  }

  init () {
    if (api.checkbox) {
      this.addAscent(CheckboxEmission.CHANGE, this._handleCheckboxChange.bind(this));
      this.descend(CheckboxEmission.RETRIEVE);
    }
  }

  _handleCheckboxChange (node) {
    if (node.name === 'row-select' ||
      node.getAttribute(api.internals.ns.attr('row-select')) === 'true') {
      this.isSelected = node.checked === true;
    }
  }

  render () {
    const height = this.getRect().height + 2;
    if (this._height === height) return;
    this._height = height;
    this.setProperty('--row-height', `${this._height}px`);
  }

  get isSelected () {
    return this._isSelected;
  }

  set isSelected (value) {
    if (this._isSelected === value) return;
    this.isRendering = value;
    this._isSelected = value;
    this.setAttribute('aria-selected', value);
  }
}

export { TableRow };
