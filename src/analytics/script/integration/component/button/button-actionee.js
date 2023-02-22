import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';
import { ButtonEmission } from './button-emission';

class ButtonActionee extends ComponentActionee {
  constructor () {
    super(null, 1);
    this._data = {};
  }

  static get instanceClassName () {
    return 'ButtonActionee';
  }

  init () {
    this.detectLinkOrButton();
    this.listen('click', this.click.bind(this));
  }

  click () {
    const data = this.ascend(ButtonEmission.GET_DATA);
    this.act(Object.assign({}, ...data));
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { ButtonActionee };
