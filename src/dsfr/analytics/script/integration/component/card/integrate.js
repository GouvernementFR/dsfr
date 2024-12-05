import api from '../../../../api';
import { CardSelector } from './card-selector';
import { CardActionee } from './card-actionee';
import { joinSelector } from '../../join-selector';

const integrateCard = (selector = '') => {
  api.internals.register(joinSelector(CardSelector.CARD, selector), CardActionee);
};

export default integrateCard;
