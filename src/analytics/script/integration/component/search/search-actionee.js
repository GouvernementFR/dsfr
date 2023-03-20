import { ComponentActionee } from '../component-actionee';
import { ButtonEmission } from '../button/button-emission';
import { Type } from '../../../analytics/action/type';
import ID from './id';
import { SearchSelector } from './search-selector';

class SearchActionee extends ComponentActionee {
  constructor () {
    super(Type.SEARCH, 2);
  }

  static get instanceClassName () {
    return 'SearchActionee';
  }

  init () {
    this.addAscent(ButtonEmission.CLICK, this.search.bind(this));
    const button = this.element.getDescendantInstances('ButtonActionee', null, true)[0];
    button.isMuted = true;
    this._input = this.querySelector(SearchSelector.INPUT);
    this._input.addEventListener('keydown', this.handleKey.bind(this));
  }

  handleKey (e) {
    if (e.keyCode === 13) {
      this.search();
    }
  }

  search () {
    this.act({ component_value: this._input.value.trim() });
  }

  get label () {
    return 'barre de recherche';
  }

  get component () {
    return ID;
  }
}

export { SearchActionee };
