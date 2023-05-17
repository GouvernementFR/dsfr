import api from '../../../../api';
import { ComponentActionee } from '../component-actionee';
import { PaginationSelector } from './pagination-selector';
import ID from './id';

class PaginationActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'PaginationActionee';
  }

  init () {
    this.setPagination();
  }

  get label () {
    return 'pagination';
  }

  get component () {
    return ID;
  }

  setPagination () {
    const currentLink = this.node.querySelector(PaginationSelector.CURRENT);
    if (!currentLink) return;
    const currentLabel = this.getFirstText(currentLink);
    if (!currentLabel) return;
    const current = this.getInt(currentLabel);
    if (isNaN(current)) return;
    api.analytics.page.current = current;

    const total = this.getTotalPage();
    if (isNaN(total)) return;
    api.analytics.page.total = total;
  }

  getTotalPage () {
    const attr = parseInt(this.node.getAttribute(PaginationSelector.ANALYTICS_TOTAL));
    if (!isNaN(attr)) return attr;
    const links = this.node.querySelectorAll(`${PaginationSelector.LINK}:not(${PaginationSelector.NEXT_LINK}):not(${PaginationSelector.LAST_LINK})`);
    if (!links) return null;
    const totalLabel = this.getFirstText(links[links.length - 1]);
    if (!totalLabel) return null;
    return this.getInt(totalLabel);
  }

  getInt (val) {
    const ints = val.match(/\d+/);
    if (!ints || ints.length === 0) return null;
    return parseInt(ints[0]);
  }
}

export { PaginationActionee };
