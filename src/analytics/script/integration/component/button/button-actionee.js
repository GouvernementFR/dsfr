import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class ButtonActionee extends ComponentActionee {
  constructor () {
    super(Type.BUTTON, 1);
  }

  static get instanceClassName () {
    return 'ButtonActionee';
  }

  init () {
    console.log('BUTTON');
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

export { ButtonActionee };
