import api from '../../../../api';
import { ShareSelector } from './share-selector';
import { ShareActionee } from './share-actionee';
import { joinSelector } from '../../join-selector';

const integrateShare = (selector = '') => {
  api.internals.register(joinSelector(ShareSelector.SHARE, selector), ShareActionee);
};

export default integrateShare;
