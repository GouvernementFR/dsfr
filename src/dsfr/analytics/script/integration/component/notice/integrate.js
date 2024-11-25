import api from '../../../../api';
import { NoticeSelector } from './notice-selector';
import { NoticeActionee } from './notice-actionee';
import { NoticeLinkActionee } from './notice-link-actionee';

const integrateNotice = () => {
  api.internals.register(NoticeSelector.NOTICE, NoticeActionee);
  api.internals.register(NoticeSelector.LINK, NoticeLinkActionee);
};

export default integrateNotice;
