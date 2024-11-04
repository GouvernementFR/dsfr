import { segmentedArgs, segmentedArgTypes, segmentedProps } from './segmented-arg-types';
import { renderSegmented } from './segmented';

const render = (args) => renderSegmented({ segmented: segmentedProps(args) });
const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'segmented',
  title: 'DSFR/Component/Segmented',
  render: render,
  argTypes: segmentedArgTypes,
  args: segmentedArgs
};

export const SegmentedStory = {
  args: {}
};

export const WithIconStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      hasIcon: true
    }
  ])
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      size: 'sm'
    }
  ])
};

export const LegendInlineStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      legendInline: true
    }
  ])
};

export const NoLegendStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      noLegend: true
    }
  ])
};
