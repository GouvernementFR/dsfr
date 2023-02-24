import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import { ButtonEmission } from '../button/button-emission';
import ID from './id';

class NavigationLinkActionee extends ComponentActionee {
  constructor () {
    super(null, 2);
  }

  static get instanceClassName () {
    return 'NavigationLinkActionee';
  }

  init () {
    this.detectInteraction();
    this.listenClick();
  }

  handleClick () {
    const data = this.ascend(ButtonEmission.GET_DATA);
    this.act(Object.assign({}, ...data));
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return null;
  }
}

export { NavigationLinkActionee };
