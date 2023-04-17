import { ComponentActionee } from '../component-actionee';
import ID from './id';
import { ShareSelector } from './share-selector';

class ShareActionee extends ComponentActionee {
  constructor () {
    super(1, true);
  }

  static get instanceClassName () {
    return 'ShareActionee';
  }

  init () {
    this.setImpressionType();
  }

  get label () {
    const title = this.querySelector(ShareSelector.TITLE);
    if (title) {
      const firstText = this.getFirstText(title);
      if (firstText) return firstText;
    }
    return 'boutons de partage';
  }

  get component () {
    return ID;
  }
}

export { ShareActionee };
