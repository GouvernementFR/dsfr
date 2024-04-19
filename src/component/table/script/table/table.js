import api from '../../api.js';
import { TableEmission } from './table-emission.js';

const PADDING = '1rem'; // padding de 4v sur le caption

class Table extends api.core.Instance {
  static get instanceClassName () {
    return 'Table';
  }

  init () {
    this.rowsHeaderWidth = [];
    this.addAscent(TableEmission.TABLE_HEIGHT, this.setTableHeight.bind(this));
    this.addAscent(TableEmission.CAPTION_HEIGHT, this.setCaptionHeight.bind(this));
    this.addAscent(TableEmission.ROW_HEADER_WIDTH, this.setRowHeaderWidth.bind(this));
    this.addAscent(TableEmission.ROW_SELECT, this.rowSelect.bind(this));
    this.addAscent(TableEmission.COL_SELECT, this.colSelect.bind(this));
    this.addAscent(TableEmission.COL_HOVER, this.colHover.bind(this));
  }

  setTableHeight (value) {
    this.setProperty('--table-offset-height', `calc(${value}px + 1px)`);
  }

  setCaptionHeight (value) {
    this.setProperty('--table-offset', `calc(${value}px + ${PADDING})`);
  }

  setRowHeaderWidth (value) {
    this.rowsHeaderWidth.push(value);
    if (!this.rowsHeaderWidth.length) return;
    this.setProperty('--row-header-cell-width', `${Math.max(...this.rowsHeaderWidth)}px`);
  }

  rowSelect (row) {
    this.descend(TableEmission.ROW_SELECT, row);
  }

  colSelect (col) {
    this.descend(TableEmission.COL_SELECT, col);
  }

  colHover (col) {
    this.descend(TableEmission.COL_HOVER, col);
  }
}

export { Table };
