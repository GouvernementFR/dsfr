import api from '../../../../api';
import { TagSelector } from './tag-selector';
import { TagActionee } from './tag-actionee';

const integrateTag = () => {
  api.internals.register(TagSelector.TAG, TagActionee);
};

export default integrateTag;
