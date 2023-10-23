import api from '../../../../api';
import { NoticeSelector } from './notice-selector';
import { NoticeActionee } from './notice-actionee';

const integrateNotice = () => {
  api.internals.register(NoticeSelector.NOTICE, NoticeActionee);
};

export default integrateNotice;
