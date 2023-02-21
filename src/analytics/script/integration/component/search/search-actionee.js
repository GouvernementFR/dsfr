import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class SearchActionee extends ComponentActionee {
  constructor () {
    super(Type.CLICK, 1);
  }

  static get instanceClassName () {
    return 'SearchActionee';
  }

  init () {
    console.log('SEARCH BAR');
    this.listen('click', this.click.bind(this));
  }

  click () {
    this.act();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { SearchActionee };
