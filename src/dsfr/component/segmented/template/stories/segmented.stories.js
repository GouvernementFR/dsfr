import { segmentedArgs, segmentedArgTypes, segmentedProps, getSegmentedData } from './segmented-arg-types';
import { renderSegmented } from './segmented';

const render = (args) => renderSegmented({ segmented: segmentedProps(args) });

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
  args: {
    hasIcon: true,
    elements: getSegmentedData()
  }
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm',
    elements: getSegmentedData()
  }
};

export const LegendInlineStory = {
  tags: ['autodocs', '!dev'],
  args: {
    legendInline: true,
    elements: getSegmentedData()
  }
};

export const NoLegendStory = {
  tags: ['autodocs', '!dev'],
  args: {
    noLegend: true,
    elements: getSegmentedData()
  }
};

export const HasDisabledStory = {
  tags: ['autodocs', '!dev'],
  args: {
    elements: getSegmentedData(3, true)
  }
};
