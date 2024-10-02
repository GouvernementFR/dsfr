import { renderLinksGroup } from './link';
import { linksGroupArgs, linksGroupArgTypes, linksGroupProps } from './links-group-arg-types';

const render = (args) => renderLinksGroup({ linksGroup: linksGroupProps(args) });

const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'links-group',
  title: 'DSFR/Component/Link/Links-Group',
  render: render,
  argTypes: linksGroupArgTypes,
  args: linksGroupArgs
};

export const ControlsStory = {
  tags: ['!dev'],
  args: {}
};

export const DefaultStory = {
  tags: ['!dev'],
  args: {}
};

export const SizeStory = {
  tags: ['!dev'],
  render: () => renders([
    {
      size: 'sm'
    },
    {
      size: 'lg'
    }
  ])
};

export const HorizontalStory = {
  tags: ['!dev'],
  args: {
    inline: true
  }
};
