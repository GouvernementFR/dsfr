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
    let totalValue = parseInt(this.node.getAttribute(PaginationSelector.ANALYTICS_TOTAL));
    if (!totalValue) {
      const links = this.node.querySelectorAll(`${PaginationSelector.LINK}:not(${PaginationSelector.NEXT_LINK}):not(${PaginationSelector.LAST_LINK})`);
      if (links) {
        const totalLabel = this.getFirstText(links[links.length - 1]);
        if (totalLabel) totalValue = this.getInt(totalLabel);
      }
    }
    if (totalValue) {
      api.analytics.page.total = totalValue;
    }

    const currentLink = this.node.querySelector(PaginationSelector.CURRENT);
    if (currentLink) {
      const currentLabel = this.getFirstText(currentLink);
      if (currentLabel) {
        api.analytics.page.current = this.getInt(currentLabel);
      }
    }
  }

  getInt (val) {
    return parseInt(val.match(/\d+/)[0]);
  }
}

export { PaginationActionee };
