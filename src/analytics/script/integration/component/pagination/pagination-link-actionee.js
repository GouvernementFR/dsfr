import { ComponentActionee } from '../component-actionee';

class PaginationLinkActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'PaginationLinkActionee';
  }

  init () {
    this.detectInteractionType();
    this.listenActionClick();
  }

  get label () {
    const firstText = this.getFirstText();
    if (firstText) return firstText;
    return 'lien pagination';
  }

  get component () {
    return null;
  }
}

export { PaginationLinkActionee };
