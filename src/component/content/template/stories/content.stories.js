import { renderContent } from './content';
import { contentArgs, contentArgTypes, contentProps } from './content-arg-types';

const render = (args) => renderContent({ content: contentProps(args) });

export default {
  id: 'content',
  title: 'DSFR/Component/Content',
  render: render,
  argTypes: contentArgTypes,
  args: contentArgs
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

export const MdStory = {
  tags: ['!dev'],
  args: {
    size: 'md'
  }
};

export const LgStory = {
  tags: ['!dev'],
  args: {
    size: 'lg'
  }
};
