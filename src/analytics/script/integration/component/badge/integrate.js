import api from '../../../../api';
import { BadgeSelector } from './badge-selector';
import { BadgeActionee } from './badge-actionee';

const integrateBadge = () => {
  api.internals.register(BadgeSelector.BADGE, BadgeActionee);
};

export default integrateBadge;
