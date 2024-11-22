import { renderHighlight } from './highlight';
import { highlightArgs, highlightArgTypes, highlightProps } from './highlight-arg-types';

const render = (args) => renderHighlight({ highlight: highlightProps(args) });

export default {
  id: 'highlight',
  title: 'DSFR/Component/Highlight',
  render: render,
  argTypes: highlightArgTypes,
  args: highlightArgs
};

export const HighlightStory = {
  args: {}
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm'
  }
};

export const SizeLgStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'lg'
  }
};

export const AccentStory = {
  tags: ['autodocs', '!dev'],
  args: {
    accent: 'green-menthe'
  }
};
