import { ComponentActionee } from '../component-actionee';

class FooterLinkActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'FooterLinkActionee';
  }

  init () {
    this.detectInteractionType();
    this.listenClick();
  }

  get label () {
    return this.getInteractionLabel();
  }
}

export { FooterLinkActionee };
