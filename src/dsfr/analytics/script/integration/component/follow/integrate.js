import api from '../../../../api';
import { FollowSelector } from './follow-selector';
import { FollowActionee } from './follow-actionee';
import { joinSelector } from '../../join-selector';

const integrateFollow = (selector = '') => {
  api.internals.register(joinSelector(FollowSelector.FOLLOW, selector), FollowActionee);
};

export default integrateFollow;
