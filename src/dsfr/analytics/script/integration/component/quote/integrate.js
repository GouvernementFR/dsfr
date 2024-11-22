import api from '../../../../api';
import { QuoteSelector } from './quote-selector';
import { QuoteActionee } from './quote-actionee';

const integrateQuote = () => {
  api.internals.register(QuoteSelector.QUOTE, QuoteActionee);
};

export default integrateQuote;
