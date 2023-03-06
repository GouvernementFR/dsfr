import { ComponentActionee } from '../component-actionee';
import { NoticeSelector } from './notice-selector';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class NoticeActionee extends ComponentActionee {
  constructor () {
    super(Type.IMPRESSION, 1);
  }

  static get instanceClassName () {
    return 'NoticeActionee';
  }

  get label () {
    const noticeTitle = this.node.querySelector(NoticeSelector.TITLE);
    if (noticeTitle) return noticeTitle.textContent.trim();

    return 'Bandeau information';
  }

  get component () {
    return ID;
  }
}

export { NoticeActionee };
