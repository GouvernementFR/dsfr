import { ComponentActionee } from '../component-actionee';
import ID from './id';
import { ButtonEmission } from '../button/button-emission';

class SearchActionee extends ComponentActionee {
  static get instanceClassName () {
    return 'SearchActionee';
  }

  init () {
    this.addAscent(ButtonEmission.GET_DATA, this.getData);
  }

  getData () {
    return { search_terms: 'my_search_terms' };
  }

  get label () {
    return 'barre de recherche';
  }

  get component () {
    return ID;
  }
}

export { SearchActionee };
