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

export const ContentStory = {
  args: {}
};

export const SizeSmStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'sm'
  }
};

export const SizeMdStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'md'
  }
};

export const SizeLgStory = {
  tags: ['autodocs', '!dev'],
  args: {
    size: 'lg'
  }
};
