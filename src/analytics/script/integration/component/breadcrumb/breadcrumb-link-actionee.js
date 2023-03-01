import { ComponentActionee } from '../component-actionee';

class BreadcrumbLinkActionee extends ComponentActionee {
  constructor () {
    super(null, 2);
  }

  static get instanceClassName () {
    return 'BreadcrumbLinkActionee';
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
    return null;
  }
}

export { BreadcrumbLinkActionee };
