import { ComponentActionee } from '../component-actionee';
import ID from './id';

class DownloadActionee extends ComponentActionee {
  constructor () {
    super(1, true);
  }

  static get instanceClassName () {
    return 'DownloadActionee';
  }

  init () {
    this.detectInteractionType();
    this.listenClick();
  }

  get label () {
    return this.getFirstText();
  }

  get component () {
    return ID;
  }
}

export { DownloadActionee };
