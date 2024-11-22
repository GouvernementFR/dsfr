import api from '../../../../api';
import { ShareSelector } from './share-selector';
import { ShareActionee } from './share-actionee';

const integrateShare = () => {
  api.internals.register(ShareSelector.SHARE, ShareActionee);
};

export default integrateShare;
