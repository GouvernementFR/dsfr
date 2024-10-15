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

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const SmStory = {
  tags: ['!dev'],
  args: {
    size: 'sm'
  }
};

export const LgStory = {
  tags: ['!dev'],
  args: {
    size: 'lg'
  }
};

export const AccentStory = {
  tags: ['!dev'],
  args: {
    accent: 'green-menthe'
  }
};
