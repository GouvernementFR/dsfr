import api from '../../api.js';
import { TableEmission } from './table-emission.js';

const PADDING = '1rem'; // padding de 4v sur le caption

class Table extends api.core.Instance {
  static get instanceClassName () {
    return 'Table';
  }

  init () {
    this.addAscent(TableEmission.TABLE_HEIGHT, this.setTableHeight.bind(this));
    this.addAscent(TableEmission.CAPTION_HEIGHT, this.setCaptionHeight.bind(this));
    this.addAscent(TableEmission.CAPTION_WIDTH, this.setCaptionWidth.bind(this));
    this.addAscent(TableEmission.ROW_SELECT, this.rowSelect.bind(this));
    this.addAscent(TableEmission.COL_SELECT, this.colSelect.bind(this));
    this.addAscent(TableEmission.COL_HOVER, this.colHover.bind(this));
    this.addAscent(TableEmission.COL_OUT, this.colOut.bind(this));
  }

  setTableHeight (value) {
    this.setProperty('--table-offset-height', `calc(${value}px + 1px)`);
  }

  setCaptionHeight (value) {
    this.setProperty('--table-offset', `calc(${value}px + ${PADDING})`);
  }

  setCaptionWidth (value) {
    this.setProperty('--table-offset-width', `${value}px`);
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

  colOut (col) {
    this.descend(TableEmission.COL_OUT, col);
  }
}

export { Table };
