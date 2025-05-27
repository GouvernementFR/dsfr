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

export const DownloadStory = {
  tags: ['autodocs', '!dev'],
  render: () => renders([
    {
      links: [
        {
          label: linkArgs.label + ' 1',
          href: 'https://www.example.com/document.pdf',
          download: true,
          detail: 'PDF – 1,2 Mo'
        },
        {
          label: linkArgs.label + ' 2',
          href: 'https://www.example.com/document.docx',
          download: true,
          detail: 'DOCX – 500 ko'
        },
        {
          label: linkArgs.label + ' 3',
          href: 'https://www.example.com/document.zip',
          download: true,
          detail: 'ZIP – 2,5 Mo'
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
