import { ComponentActionee } from '../component-actionee';
import ID from './id';

class NoticeLinkActionee extends ComponentActionee {
  constructor () {
    super(2);
  }

  static get instanceClassName () {
    return 'NoticeLinkActionee';
  }

  init () {
    this.detectInteractionType();
    this.listenActionClick();
  }

  get label () {
    const firstText = this.getFirstText();
    if (firstText) return firstText;

    return 'lien de bandeau d\'information importante';
  }

  get component () {
    return ID;
  }
}

export { NoticeLinkActionee };
