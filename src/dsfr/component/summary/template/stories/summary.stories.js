import { renderSummary } from './summary';
import { summaryArgs, summaryArgTypes, summaryProps } from './summary-arg-types';

const render = (args) => renderSummary({ summary: summaryProps(args) });

export default {
  id: 'summary',
  title: 'DSFR/Component/Summary',
  render: render,
  argTypes: summaryArgTypes,
  args: summaryArgs
};

export const SummaryStory = {
  tags: ['autodocs'],
  args: {}
};
