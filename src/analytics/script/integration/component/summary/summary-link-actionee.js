import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import { ButtonEmission } from '../button/button-emission';

class SummaryLinkActionee extends ComponentActionee {
  constructor () {
    super(Type.INTERNAL, 1);
  }

  static get instanceClassName () {
    return 'SummaryLinkActionee';
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

export { SummaryLinkActionee };
