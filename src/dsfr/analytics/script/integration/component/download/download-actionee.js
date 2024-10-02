import { ComponentActionee } from '../component-actionee';
import ID from './id';

class DownloadActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'DownloadActionee';
  }

  init () {
    this.detectInteractionType();
    this.listenActionClick();
  }

  get label () {
    const text = this.getFirstText();
    if (text) return text;
    return 'téléchargement';
  }

  get component () {
    return ID;
  }
}

export { DownloadActionee };
