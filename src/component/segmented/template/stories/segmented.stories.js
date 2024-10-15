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

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const WithIconStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      hasIcon: true
    }
  ])
};

export const SmStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      size: 'sm'
    }
  ])
};

export const LegendInlineStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      legendInline: true
    }
  ])
};

export const NoLegendStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      noLegend: true
    }
  ])
};
