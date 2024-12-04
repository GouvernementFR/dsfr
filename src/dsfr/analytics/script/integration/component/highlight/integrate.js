import api from '../../../../api';
import { HighlightSelector } from './highlight-selector';
import { HighlightActionee } from './highlight-actionee';
import { joinSelector } from '../../join-selector';

const integrateHighlight = (selector = '') => {
  api.internals.register(joinSelector(HighlightSelector.HIGHLIGHT, selector), HighlightActionee);
};

export default integrateHighlight;
