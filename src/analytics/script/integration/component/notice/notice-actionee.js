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
    const link = this.node.querySelector(NoticeSelector.LINK);
    if (link) {
      this.link = link;
      this.detectInteractionType(link);
      this.listenActionClick(link);
    }
  }

  get label () {
    const noticeTitle = this.node.querySelector(NoticeSelector.TITLE);
    if (noticeTitle) {
      const firstText = this.getFirstText(noticeTitle);
      if (firstText) return firstText;
    }

    return 'bandeau d\'information importante';
  }

  get component () {
    return ID;
  }
}

export { NoticeActionee };
