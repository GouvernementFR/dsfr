import api from '../../api.js';
import { TableEmissions } from './table-emissions.js';

const PADDING = '1rem'; // padding de 4v sur le caption

class Table extends api.core.Instance {
  init () {
    this.addAscent(TableEmissions.CAPTION_HEIGHT, this.setCaptionHeight.bind(this));
  }

  setCaptionHeight (value) {
    this.setProperty('--table-offset', `calc(${value}px + ${PADDING})`);
  }
}

export { Table };
