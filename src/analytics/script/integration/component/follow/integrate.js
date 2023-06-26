import api from '../../../../api';
import { FollowSelector } from './follow-selector';
import { FollowActionee } from './follow-actionee';

const integrateFollow = () => {
  api.internals.register(FollowSelector.FOLLOW, FollowActionee);
};

export default integrateFollow;
