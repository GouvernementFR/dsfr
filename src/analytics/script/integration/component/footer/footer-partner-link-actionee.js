import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import { ButtonEmission } from '../button/button-emission';
import ID from './id';

class FooterPartnerLinkActionee extends ComponentActionee {
  constructor () {
    super(Type.INTERNAL, 2);
  }

  static get instanceClassName () {
    return 'FooterPartnerLinkActionee';
  }

  init () {
    this.detectLinkOrButton();
    this.listen('click', this.handleClick.bind(this), { capture: true });
  }

  handleClick () {
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

export { FooterPartnerLinkActionee };
