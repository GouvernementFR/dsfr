import api from '../../../../api';
import { SummarySelector } from './summary-selector';
import { SummaryActionee } from './summary-actionee';
import { SummaryLinkActionee } from './summary-link-actionee';
import { SummarySectionActionee } from './summary-section-actionee';

const integrateSummary = () => {
  api.internals.register(SummarySelector.SUMMARY, SummaryActionee);
  api.internals.register(SummarySelector.LINK, SummaryLinkActionee);
  api.internals.register(SummarySelector.ITEM, SummarySectionActionee);
};

export default integrateSummary;
