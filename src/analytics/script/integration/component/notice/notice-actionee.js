import { ComponentActionee } from '../component-actionee';
import { NoticeSelector } from './notice-selector';
import ID from './id';

class NoticeActionee extends ComponentActionee {
  constructor () {
    super(1);
  }

  static get instanceClassName () {
    return 'NoticeActionee';
  }

  init () {
    this.setImpressionType();
  }

  get label () {
    const noticeTitle = this.node.querySelector(NoticeSelector.TITLE);
    if (noticeTitle) return this.getFirstText(noticeTitle);

    return 'Bandeau information importante';
  }

  get component () {
    return ID;
  }
}

export { NoticeActionee };
