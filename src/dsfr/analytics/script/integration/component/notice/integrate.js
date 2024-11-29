import api from '../../../../api';
import { NoticeSelector } from './notice-selector';
import { NoticeActionee } from './notice-actionee';
import { NoticeLinkActionee } from './notice-link-actionee';
import { joinSelector } from '../../join-selector';

const integrateNotice = (selector = '') => {
  api.internals.register(joinSelector(NoticeSelector.NOTICE, selector), NoticeActionee);
  api.internals.register(joinSelector(NoticeSelector.LINK, selector), NoticeLinkActionee);
};

export default integrateNotice;
