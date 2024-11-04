import api from '../../../../api';
import { QuoteSelector } from './quote-selector';
import { QuoteActionee } from './quote-actionee';
import { joinSelector } from '../../join-selector';

const integrateQuote = (selector = '') => {
  api.internals.register(joinSelector(QuoteSelector.QUOTE, selector), QuoteActionee);
};

export default integrateQuote;
