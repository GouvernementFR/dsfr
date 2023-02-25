import { ComponentActionee } from '../component-actionee';
import { ButtonEmission } from '../button/button-emission';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class SearchActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION);
  }

  static get instanceClassName () {
    return 'SearchActionee';
  }

  init () {
    this.addAscent(ButtonEmission.GET_DATA, this.getData.bind(this));
    this._input = this.querySelector('input[type="search"],input[type="text"]');
  }

  getData () {
    return { search_terms: this._input.value };
  }

  get label () {
    return 'barre de recherche';
  }

  get component () {
    return ID;
  }
}

export { SearchActionee };
