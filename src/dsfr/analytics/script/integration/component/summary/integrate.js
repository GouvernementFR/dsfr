import api from '../../../../api';
import { SummarySelector } from './summary-selector';
import { SummaryActionee } from './summary-actionee';
import { SummaryLinkActionee } from './summary-link-actionee';
import { SummarySectionActionee } from './summary-section-actionee';
import { joinSelector } from '../../join-selector';

const integrateSummary = (selector = '') => {
  api.internals.register(joinSelector(SummarySelector.SUMMARY, selector), SummaryActionee);
  api.internals.register(joinSelector(SummarySelector.LINK, selector), SummaryLinkActionee);
  api.internals.register(joinSelector(SummarySelector.ITEM, selector), SummarySectionActionee);
};

export default integrateSummary;
