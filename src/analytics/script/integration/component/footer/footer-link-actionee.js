import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import { ButtonEmission } from '../button/button-emission';
import ID from './id';

class FooterLinkActionee extends ComponentActionee {
  constructor () {
    super(Type.INTERNAL, 2);
  }

  static get instanceClassName () {
    return 'FooterBottomLinkActionee';
  }

  init () {
    this.detectInteraction();
    this.listenClick();
  }

  handleClick () {
    this.act();
  }

  get label () {
    return this.node.textContent.trim();
  }

  get component () {
    return ID;
  }
}

export { FooterLinkActionee };
