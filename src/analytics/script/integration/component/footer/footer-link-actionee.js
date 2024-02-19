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
    this.listenActionClick();
  }

  get label () {
    const label = this.getInteractionLabel();
    if (label) return label;

    return 'lien pied de page';
  }
}

export { FooterLinkActionee };
