import api from '../../../../api';
import { TagSelector } from './tag-selector';
import { TagActionee } from './tag-actionee';
import { joinSelector } from '../../join-selector';

const integrateTag = (selector = '') => {
  api.internals.register(joinSelector(TagSelector.TAG, selector), TagActionee);
};

export default integrateTag;
