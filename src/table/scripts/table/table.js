import api from '../../api.js';
import { TableEmissions } from './table-emissions';
import { TableSelectors } from './table-selectors';

const PADDING = '1rem'; // padding de 4v sur le caption

class Table extends api.core.Instance {
  init () {
    this.addAscent(TableEmissions.SCROLLABLE, this.scrollable.bind(this));
    this.addAscent(TableEmissions.CAPTION_HEIGHT, this.setCaptionHeight.bind(this));
  }

  scrollable () {
    return !this.matches(TableSelectors.NO_SCROLL);
  }

  setCaptionHeight (value) {
    this.setProperty('--table-offset', `calc(${value}px + ${PADDING})`);
  }
}

export { Table };
