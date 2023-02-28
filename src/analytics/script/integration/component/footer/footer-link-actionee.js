import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';

class FooterLinkActionee extends ComponentActionee {
  constructor () {
    super(Type.INTERNAL, 2);
  }

  static get instanceClassName () {
    return 'FooterLinkActionee';
  }

  init () {
    this.detectInteraction();
    this.listenClick();
  }

  get label () {
    return this.getInteractionLabel();
  }
}

export { FooterLinkActionee };
