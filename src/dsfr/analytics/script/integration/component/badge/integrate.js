import api from '../../../../api';
import { BadgeSelector } from './badge-selector';
import { BadgeActionee } from './badge-actionee';
import { joinSelector } from '../../join-selector';

const integrateBadge = (selector = '') => {
  api.internals.register(joinSelector(BadgeSelector.BADGE, selector), BadgeActionee);
};

export default integrateBadge;
