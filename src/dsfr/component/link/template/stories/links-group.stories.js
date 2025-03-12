import { renderLinksGroup } from './link';
import { linksGroupArgs, linksGroupArgTypes, linksGroupProps } from './links-group-arg-types';
import { linkArgs } from './link-arg-types';

const render = (args) => renderLinksGroup({ linksGroup: linksGroupProps(args) });

const renders = (argsArray) => argsArray.map(args => render(args)).join('\n\n');

export default {
  id: 'links-group',
  title: 'DSFR/Component/Link/Links-Group',
  render: render,
  argTypes: linksGroupArgTypes,
  args: linksGroupArgs
};

export const LinksGroupStory = {
  tags: ['!autodocs'],
  args: {}
};

export const SizeSMStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      size: 'sm',
      links: [
        {
          label: linkArgs.label + ' 1'
        },
        {
          label: linkArgs.label + ' 2'
        },
        {
          label: linkArgs.label + ' 3'
        }
      ]
    }
  ])
};

export const SizeMDStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      size: 'md',
      links: [
        {
          label: linkArgs.label + ' 1'
        },
        {
          label: linkArgs.label + ' 2'
        },
        {
          label: linkArgs.label + ' 3'
        }
      ]
    }
  ])
};

export const SizeLGStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      size: 'lg',
      links: [
        {
          label: linkArgs.label + ' 1'
        },
        {
          label: linkArgs.label + ' 2'
        },
        {
          label: linkArgs.label + ' 3'
        }
      ]
    }
  ])
};

export const HorizontalStory = {
  tags: ['autodocs', '!dev'],
  args: {
    inline: true
  }
};
