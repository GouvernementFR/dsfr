import api from '../../../../api';
import { HighlightSelector } from './highlight-selector';
import { HighlightActionee } from './highlight-actionee';

const integrateHighlight = () => {
  api.internals.register(HighlightSelector.HIGHLIGHT, HighlightActionee);
};

export default integrateHighlight;
