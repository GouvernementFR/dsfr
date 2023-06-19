import api from '../../../../api';
import { CardSelector } from './card-selector';
import { CardActionee } from './card-actionee';

const integrateCard = () => {
  api.internals.register(CardSelector.CARD, CardActionee);
};

export default integrateCard;
