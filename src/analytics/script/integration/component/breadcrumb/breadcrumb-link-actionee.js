import { ComponentActionee } from '../component-actionee';

class BreadcrumbLinkActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'BreadcrumbLinkActionee';
  }

  init () {
    this.detectInteractionType();
    this.listenActionClick();
  }

  handleClick () {
    this.act();
  }

  get label () {
    const firstText = this.getFirstText();
    if (firstText) return firstText;
    return 'lien fil d\'ariane';
  }

  get component () {
    return null;
  }
}

export { BreadcrumbLinkActionee };
