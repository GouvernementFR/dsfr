import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class LinkActionee extends ComponentActionee {
  constructor () {
    super(Type.INTERNAL, 1);
  }

  static get instanceClassName () {
    return 'LinkActionee';
  }

  init () {
    console.log('LINK');
    this.listen('click', this.click.bind(this));
  }

  click () {
    const data = { component_value: this.getAttribute('href')};
    this.act(data);
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { LinkActionee };
